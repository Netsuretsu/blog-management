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

router.get("", (req, res) => {
    res.render("about");
})


module.exports = router;