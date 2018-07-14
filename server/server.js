const express = require('express');
const bodyParser = require('express');
const app = express();
const port = process.env.PORT || 9999

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({extended: false}));

app.listen(port, console.log(`server listening at port ${port}`));
