require("./database/mongooseInstance.js")
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require("cors");

const session = require("express-session");

const Session = require("./database/sessionShema.js")

const https = require('https');
const fs = require('fs');
const { sessionTrackMiddleware } = require("./middlewares/sessionManagement.js");

const options = {
    key: fs.readFileSync('./tesing-domain.work.gd.key'),
    cert: fs.readFileSync('./tesing-domain.work.gd.cer')
};


const app = express();

app.use(express.json());

app.use(
    session({
        secret: "secret-key-value-anything",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: true,
            maxAge: 3600000, // 1hours validity for reference
            sameSite: "none"
        }
    })
);



app.use(
    cors({
        origin: ["http://localhost:3000", "https://resizable-component-amarnathckr.netlify.app"],
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
        credentials: true,
    })
);

app.use(sessionTrackMiddleware);


const mainRouter = require("./routes/mainRouter.js")

app.use("/api/v1/", mainRouter)

const PORT = process.env.PORT || 8443;



app.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}`);
});
