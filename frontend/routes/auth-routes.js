const router = require("express").Router();
const passport = require("passport");
const ls = require("local-storage");

router.get("/login", (req, res) => {
    const access = ls.get("access");
    res.render("index", { user: req.user, access });
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

router.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile"],
    })
);

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
    res.redirect("/pesquisa");
});

module.exports = router;
