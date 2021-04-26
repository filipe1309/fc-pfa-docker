const { response } = require('express')
const express = require('express')
const app = express()

app.get('/', async(req, res) => {
    var { connection } = await require("./db");
    const [rows] = await connection.execute('SELECT * FROM `modules`');
    res.send({ rows });
})

app.listen(3000, () => {
    console.log("Running on port 3000")
});