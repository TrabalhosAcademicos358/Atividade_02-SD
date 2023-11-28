const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./keys");
const ls = require("local-storage")

passport.use(
	new GoogleStrategy(
		{
			// options for google strategy
			clientID: keys.google.clientID,
			clientSecret: keys.google.clientSecret,
			callbackURL: "/auth/google/redirect",
		},
		(accessToken, refreshToken, profile, done) => {
			ls.set("accessToken", accessToken)
			ls.set("refreshToken", refreshToken)
			console.log("passport callback function fired:");
			console.log(profile);
		}
	)
);
