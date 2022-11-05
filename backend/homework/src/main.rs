#[macro_use] extern crate rocket;

use rocket::form::Form;
use rocket::State;
use rocket::fairing::AdHoc;
use rocket::http::Status;
use rocket::serde::Deserialize;
use reqwest::{multipart, Client};

#[derive(FromForm, Clone)]
struct FormPost {
    name: String,
    birthday: String,
    height: String,
    addres: String,
    mobile: String,
    phone: String,
    message: String,
    sticker: Option<Sticker>
}

#[derive(FromForm, Clone)]
struct Sticker {
    #[field(name = "packageId")]
    package_id: String,
    #[field(name = "stickerId")]
    sticker_id: String,
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

#[get("/line", data = "<form>")]
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
    let multipart = if let Some(sticker) = form.sticker.clone() {
        multipart
            .text("stickerId", sticker.sticker_id.clone())
            .text("stickerPackageId", sticker.package_id.clone())
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
    rocket::build().mount("/", routes![index, line]).attach(AdHoc::config::<Config>())
}
