
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('../../models');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.post('/login', async(req, res) => {
    console.log(req.body);
    let reqs = await model.User.authenticate(req.body.emailUser, req.body.passwordUser)

    return res.json(reqs)
});


app.post('/register', async(req, res) => {
    let reqs = await model.User.create({
        'name': req.body.nameUser,
        'email': req.body.emailUser,
        'password': req.body.passwordUser,
        'createdAt': new Date(),
        'updatedAt': new Date()
    })
});


let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Running');
})

