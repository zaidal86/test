const express = require("express");
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/page.html', function (req, res) {
    res.send('hello world' + req + res);
});
app.listen(3000, () => {
    console.log("Started on PORT 3000");
})