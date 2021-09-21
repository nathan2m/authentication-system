const PORT = 4000;
const address = "localhost";

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./app/controllers/index")(app);

app.listen(PORT, () => {
    console.log(`Endereço do servidor: http://${address}:${PORT}`);
});