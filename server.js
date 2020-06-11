const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Start at public folder directory
app.use(express.static('public'));

//router
require('./routes/api-routes')(app)
require('./routes/html-routes')(app)

app.listen(PORT, function() {
    console.log(`listening at port ${PORT}`);
});