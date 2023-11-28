const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");
const path = require("path");
const nunjucks = require("nunjucks");

const keys = require("./config/keys");

const app = express();

app.set("view engine", "njk");
nunjucks.configure("public", {
    express: app,
    noCache: true,
    autoescape: true,
});

// set up session cookies
app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: ["secret"],
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(4000, () => {
    console.log("app now listening for requests on port 4000");
});
