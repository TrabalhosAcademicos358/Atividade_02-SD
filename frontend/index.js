import passport from "passport";
import express from "express";
import path from "path";
import cookieSession from 'cookie-session';

const app = express();

app.use(express.static(path.join("public")));

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: 'secret'
}));

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth", (req, res) => {
    res.sendFile(path.join("public", "index.html"));
});

app.get("/auth/login", (req, res) => {
    res.render("login", { user: req.user });
});

app.get("/auth/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["profile"],
    })
);

app.get("/auth/google/redirect", passport.authenticate("google"), (req, res) => {
    res.send("you reached the redirect URI");
});


const port = 4000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
