
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('../../models');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.post('/login', async(req, res) => {
    const {emailUser, passwordUser } = req.body;
    console.log(req.body);
    //let reqs = await model.User.authenticate(req.body.emailUser, req.body.passwordUser)
    
    try {
        const user = await model.User.findOne({ where: { email: emailUser } });
        console.log(user);
  
        if (user.password == passwordUser) {
          return res.json({
            status: 1,
            name: user.name,
            email: user.email
        })} else return res.json({
          status: 0
        })
      } catch (TypeError) {
        return res.json({
          status: 0
        })
      }

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


let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Running');
})

