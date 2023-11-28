const router = require('express').Router();
const ls = require("local-storage");

const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    const access = ls.get("access");
    res.render('pesquisa', { user: req.user, access });
});

module.exports = router;
