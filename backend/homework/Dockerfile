FROM rust:1.61.0 AS builder

WORKDIR /usr/backend
COPY ./src ./src
COPY ./Cargo.lock .
COPY ./Cargo.toml .

RUN cargo build --release

FROM nginx AS release

WORKDIR /usr/backend

COPY --from=builder /usr/backend/target/release/homework ./
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["./homework"]
