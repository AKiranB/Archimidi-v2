cors = require('cors')
require("dotenv/config");
require("./db");
const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const DB_URL = process.env.MONGODB_URI


app.use(express.static(path.join(__dirname, "/client/build")));
require("./config")(app);

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
        resave: true,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: DB_URL
        })
    })
)

const allRoutes = require("./routes");
app.use("/api", allRoutes);

const index = require('./routes/index');
app.use('/', index);

const songRouter = require('./routes/midiSong');
app.use('/api', songRouter);

const auth = require('./routes/auth');
app.use('/api/auth', auth)

app.use((req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});

require("./error-handling")(app);

module.exports = app;
