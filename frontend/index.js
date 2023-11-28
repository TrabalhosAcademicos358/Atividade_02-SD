const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./routes/auth-routes");
const profileRoutes = require("./routes/profile-routes");
const passportSetup = require("./config/passport-setup");
const path = require("path");

const keys = require("./config/keys");

const app = express();

// set up session cookies
app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: "secret",
	})
);

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Serve static HTML files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// set up routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// create home route
app.get("/", (req, res) => {
	res.render("home", { user: req.user });
});

app.listen(4000, () => {
	console.log("app now listening for requests on port 4000");
});
