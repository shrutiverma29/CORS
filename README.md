# Fix CORS

## What is CORS?
For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts.

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

An example of a cross-origin request: Client hosted at `http://localhost:3000` and server hosted at `http://localhost:8080`

To Read more about CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

## How is this project helping?
Fixing CORS issue for development. 

<img width="547" alt="cors" src="https://user-images.githubusercontent.com/11773587/204036905-66961c7e-fcbe-4846-8d61-9cf0a1eabdf9.png">

In this project, there's a client hosted at `http://localhost:3000` and a server at `http://localhost:8080`

<img width="598" alt="Screenshot 2022-11-25 at 11 37 27 PM" src="https://user-images.githubusercontent.com/11773587/204037401-1a27e182-48c0-4246-8d5f-fced29d16895.png">



The code uses `axios` and `XMLHttpRequest` to create request to the server.
The server has an api `POST` endpoint `/login` which sends response body as `cookie saved` and `set-cookie` response header.

To check browser cookies:
1) Go to `Application` tab

<img width="1237" alt="Screenshot 2022-11-25 at 11 34 30 PM" src="https://user-images.githubusercontent.com/11773587/204037212-cae6829d-41e9-4bde-a96a-c78f03c3de5b.png">

2) Click `cookies` and see the same cookie sent in response headers

## How to run?

First run `npm install`

Run server: `node src/server.js`

Run client: `npm start`

Go to browser: `http://localhost:3000` and click on `login` to hit api.



