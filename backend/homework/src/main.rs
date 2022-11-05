#[macro_use] extern crate rocket;

use rocket::form::Form;
use rocket::State;
use rocket::fairing::AdHoc;
use rocket::http::Status;
use rocket::serde::Deserialize;
use reqwest::{multipart, Client};
use rocket::http::Header;
use rocket::{Request, Response};
use rocket::fairing::{Fairing, Info, Kind};

pub struct CORS;

#[rocket::async_trait]
impl Fairing for CORS {
    fn info(&self) -> Info {
        Info {
            name: "Add CORS headers to responses",
            kind: Kind::Response
        }
    }

    async fn on_response<'r>(&self, _request: &'r Request<'_>, response: &mut Response<'r>) {
        response.set_header(Header::new("Access-Control-Allow-Origin", "*"));
        response.set_header(Header::new("Access-Control-Allow-Methods", "POST, GET, PATCH, OPTIONS"));
        response.set_header(Header::new("Access-Control-Allow-Headers", "*"));
        response.set_header(Header::new("Access-Control-Allow-Credentials", "true"));
    }
}


#[derive(FromForm, Clone)]
struct FormPost {
    name: String,
    birthday: String,
    height: String,
    addres: String,
    mobile: String,
    phone: String,
    message: String,
    #[field(name = "packageId")]
    package_id: Option<String>,
    #[field(name = "stickerId")]
    sticker_id: Option<String>,
}

#[derive(Deserialize)]
#[serde(crate = "rocket::serde")]
struct Config {
    token: String,
}

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[post("/line", data = "<form>")]
async fn line(form: Form<FormPost>, config: &State<Config>) -> Status {
    line_send_message(form, &config.token).await;
    Status::Ok
}

async fn line_send_message(form: Form<FormPost>, token: &String) { // Form<FromPost>
    let client = Client::new();
    let multipart = multipart::Form::new()
        .text("message", format!(
            "name: {}\nbirthday: {}\naddres: {}\nheight: {}\nmobile: {}\nphone: {}\nmessage: {}",
            form.name,
            form.birthday,
            form.addres,
            form.height,
            form.mobile,
            form.phone,
            form.message,
        ));
    let multipart = if let Some(package_id) = form.package_id.clone() {
        multipart
            .text("stickerPackageId", package_id.clone())
    } else { multipart };
    let multipart = if let Some(sticker_id) = form.sticker_id.clone() {
        multipart
            .text("stickerId", sticker_id.clone())
    } else { multipart };
    let res = client.post("https://notify-api.line.me/api/notify") 
        .multipart(multipart)
        .header("Authorization", format!("Bearer {}", token))
        .send()
        .await
        .unwrap();
    println!("{}", res.status());
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .attach(AdHoc::config::<Config>())
        .attach(CORS)
        .mount("/", routes![index, line])
}
