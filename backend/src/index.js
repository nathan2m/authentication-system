const PORT = 3000;
const address = "localhost";

const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/controllers/index")(app);

app.listen(PORT, () => {
    console.log(`Endereço do servidor: http://${address}:${PORT}`);
});