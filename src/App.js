
import axios from "axios";
import React from "react";

const baseURL = "http://localhost:8080/login";

function createPostCallToAuth() {
    axios.defaults.withCredentials = true;
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
        crossDomain: true,
        withCredentials: true,
    };
    axios
        .post(baseURL, {
            countryId: 1,
            otp: "1234",
            phone: "9718691719",
            sessionId: "session:sendotp"
        }, config)
        .then((response) => {
            console.log(response.data);
        });

}

function createXhr(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.responseText)
        }
    }
    xhr.open('POST', baseURL, true)
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.withCredentials = true;
    xhr.send({
        countryId: 1,
        otp: "1234",
        phone: "9718691719",
        sessionId: "session:sendotp"
    })
}

export default function App() {

    return (
        <div>
            <h1>Fix CORS</h1>
            <p>Server hosted on localhost:8080, cookie should get saved in browser</p>
            <p>Calling /login api, cookie received in response headers and should get saved in browser.</p>
            <p> Check with axios </p>
            <button onClick={createPostCallToAuth}>Login with axios</button>
            <p>Check with XHR</p>
            <button onClick={createXhr}>Login with xhr</button>
        </div>
    );
}