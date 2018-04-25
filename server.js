var express = require('express');
var path = require('path');
let app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("index");
});

var port = process.env.port || 3000;
app.listen(port, function () {
     console.log('Listening on %s', port);
});