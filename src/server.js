const express = require("express");
var cors = require('cors')

const app = express();

//Add CORS Handler in server
app.use(cors({ credentials: true,
   origin: "http://localhost:3000"}));


app.post('/login', (req, res) => {
    let options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
        secure: true, // Indicates if the cookie should be secur
        sameSite: "None" //If fixing cors the value should be none
    }

    // Add response header to allow particular origin
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

     // Set cookie in response header
    res.cookie('cookieName', 'cookieValue', options) // options is optional
    res.send('cookie saved')
});

app.listen(8080, () => console.log('App listening on port 8080!'));