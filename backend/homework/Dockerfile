FROM rust:1.61.0 AS builder

WORKDIR /usr/backend
COPY ./src ./src
COPY ./Cargo.lock .
COPY ./Cargo.toml .

RUN cargo build --release

FROM debian:latest AS release

WORKDIR /usr/backend

COPY --from=builder /usr/backend/target/release/homework ./
RUN apt update
RUN apt install -y ca-certificates
CMD ["./homework"]
