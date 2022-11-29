
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('../../models');

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.post('/login', async(req, res) => {
    const {email, password } = req.body;
        
    try {
        const user = await model.User.findOne({ where: { email: email } });
  
        if (user.password == password) {
          return res.json({
            status: 'success',
            name: user.name,
            email: user.email
        })} else return res.json({
          status: 'fail'
        })
      } catch (TypeError) {
        return res.json({
          status: 'fail'
        })
      }
});

app.post('/loginWorker', async(req, res) => {
    const {email, password } = req.body;
        
    try {
        const worker = await model.Worker.findOne({ where: { email: email } });
        console.log(worker);
  
        if (worker.password == password) {
          return res.json({
            status: 'success',
            name: worker.name,
            email: worker.email
        })} else return res.json({
          status: 'fail'
        })
      } catch (TypeError) {
        return res.json({
          status: 'fail'
        })
      }
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

