const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const ls = require("local-storage");

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.google.clientID,
            clientSecret: keys.google.clientSecret,
            callbackURL: "/auth/google/redirect",
        },
        (accessToken, refreshToken, profile, done) => {
            ls.set("access", accessToken);
            ls.set("refresh", refreshToken);
            console.log("passport callback function fired:");
            console.log(profile);
        }
    )
);
