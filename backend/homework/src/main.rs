#[macro_use] extern crate rocket;

use rocket::form::{Form, self};
use rocket::http::Status;
use hyper::{Client, Request, Method, Body};

const LINE_TOKEN: &'static str = "XUuv4NzzfpwgjE68WTwyU2JUyfmOFX80E9nuUiu3ehA";

#[derive(FromForm)]
struct FromPost {
    name: String,
    birthday: String,
    height: String,
    addres: String,
    mobile: String,
    phone: String,
    message: String,
}

#[get("/")]
fn index() -> &'static str {
    "Hello, world!"
}

#[post("/line", data = "<from>")]
async fn line(from: Form<FromPost>) -> Status {
    line_send_message(from).await.unwrap();
    Status::Ok
}


async fn line_send_message(form: Form<FromPost>) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    // Still inside `async fn main`...
    let client = Client::new();

    // Parse an `http::Uri`...
    let uri = "https://notify-api.line.me/api/notify";

    let req = Request::builder()
        .method(Method::POST)
        .uri(uri)
        .header("Authorization", format!("Bearer ", LINE_TOKEN))
        .body(Body::from(*form))?;
    

    // Await the response...
    let mut resp = client.get(uri).await?;

    println!("Response: {}", resp.status());

    Ok(())
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index, line_send_message])
}
