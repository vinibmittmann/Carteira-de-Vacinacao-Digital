
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

app.post('/loginWorker', async(req, res) => {
    console.log(req.body);
    let reqs = await model.Worker.authenticate(req.body.emailWorker, req.body.passwordWorker)

    return res.json(reqs)
});


app.post('/register', async(req, res) => {
    let reqs = await model.User.create({
        'name': req.body.nameUser,
        'cpf': req.body.cpfUser,
        'email': req.body.emailUser,
        'password': req.body.passwordUser,
        'birth': req.body.birthUser,
        'createdAt': new Date(),
        'updatedAt': new Date()
    })
});

app.post('/registerWorker', async(req, res) => {
    let reqs = await model.Worker.create({
        'name': req.body.nameUser,
        'cpf': req.body.cpfUser,
        'email': req.body.emailUser,
        'password': req.body.passwordUser,
        'birth': req.body.birthUser,
        'createdAt': new Date(),
        'updatedAt': new Date()
    })
});


app.post('/registerVacinas', async(req, res) => {
    let reqs = await model.Vacinas.create({
        'name': req.body.nameVacinas,
        'producer': req.body.producer,
        'dosage': req.body.dosage,
        'createdAt': new Date(),
        'updatedAt': new Date()
    })
});

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Running');
})

