const express = require("express");
const router = express.Router();

// Routes
router.get("", (req, res) => {
    locals = {
        "title": "Blog management",
        "description": "A simple web site to maneg blog"
    }
    res.render("index", locals);
})

router.get("/about", (req, res) => {
    res.render("about");
})

router.get("/contact", (req, res) => {
    res.render("contact");
})


module.exports = router;