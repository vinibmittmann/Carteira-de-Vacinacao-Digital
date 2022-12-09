
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('../../models');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { Op } = require("sequelize");

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const verifyWorker = async (res, req, next) => {
    try {
        jwt.verify(res.body.token, 'shhhhhh')
        next()
    } catch (error) {
        return res.json({
            status: 'invalid token'
        })
    }
}

app.post('/login', async(req, res) => {
    const {email, password } = req.body;
        
    try {
        const user = await model.User.findOne({ where: { email: email } });
  
        if (bcrypt.compareSync(password, user.password)) {
          return res.json({
            status: 'success',
            name: user.name,
            email: user.email,
            token: jwt.sign({id: user.id}, 'shhhh', { expiresIn: '2h' })
        })} else return res.json({
            status: 'fail',
            message: 'Credenciais inválidas!'
        })
      } catch (TypeError) {
        return res.json({
            status: 'fail',
            message: 'Credenciais inválidas!'
        })
      }
});

app.post('/loginWorker', async(req, res) => {
    const {email, password } = req.body;
        
    try {
        const worker = await model.Worker.findOne({ where: { email: email } });
  
        if (worker.password === password) {
          return res.json({
            status: 'success',
            name: worker.name,
            email: worker.email,
            token: jwt.sign({id: worker.id}, 'shhhhhh', { expiresIn: '2h' })
        })} else return res.json({
            status: 'fail',
            message: 'Credenciais inválidas!'
        })
      } catch (TypeError) {
        return res.json({
            status: 'fail',
            message: 'Credenciais inválidas!'
        })
      }
});

app.post('/register', verifyWorker, async(req, res) => {
    let reqs = await model.User.create({
        'name': req.body.name,
        'cpf': req.body.cpf,
        'email': req.body.email,
        'password': bcrypt.hashSync(req.body.password, await bcrypt.genSalt(15)),
        'birth': req.body.birth,
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

app.post('/getVaccines', verifyWorker, async(req, res) => {
    let reqs = await model.Vacinas.findAll({where: {name: {[Op.iLike]: req.body.name}}})
    return res.json(reqs)
})

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log('Running');
})
