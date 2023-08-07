const express = require("express");
const router = express.Router();
const Post = require('../models/Post')

const adminLayout = '../views/layouts/admin'


router.get("/admin", async (req, res) => {

    try {
        locals = {
            "title": "Admin",
        }


        res.render("admin/index", { locals, layout: adminLayout })
    } catch (error) {
        console.log(error)
    }
})

router.post("/admin", async (req, res) => {

    try {
        locals = {
            "title": "Admin",
        }

        const { username, password } = req.body;


        res.render("admin/index", { locals, layout: adminLayout })
    } catch (error) {
        console.log(error)
    }
})
router.post("/register", async (req, res) => {

    try {
        locals = {
            "title": "Admin",
        }

        const { username, password } = req.body;

        if (req.body.username === 'admin' && req.body.password === 'password') {
            res.send("")
        } else {
            res.send('Wrong username or password');
        }


        res.render("admin/index", { locals, layout: adminLayout })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
