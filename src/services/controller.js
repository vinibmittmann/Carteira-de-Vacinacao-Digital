const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const model = require('../../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

let app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const verifyEmployee = async(req, res, next) => {
    try {
        let token = jwt.verify(req.body.token, 'shhhhhh')
        if (token) next()
    } catch (error) {
        return false
    }
}

const verifyUser = async(req, res, next) => {
    try {
        let token = jwt.verify(req.body.token, 'shhhh')
        if (token) next()
    } catch (error) {
        return false
    }
}

app.post('/login', async(req, res) => {
    try {
        const user = await model.User.findOne({ where: { email: req.body.email } })
        const secret = user.type === 0 ? 'shhhh' : 'shhhhhh'

        if (bcrypt.compareSync(req.body.password, user.password)) {
          return res.json({
            status: 'success',
            name: user.name,
            email: user.email,
              token: jwt.sign({id: user.id}, secret, { expiresIn: '2h' }),
              type: user.type.toString()
          })
        } else return res.json({status: 'fail', message: 'Credenciais inválidas!'})
      } catch (TypeError) {
        return res.json({status: 'fail', message: 'Credenciais inválidas!'})
      }
})

app.post('/register', async(req, res) => {
    let reqs = await model.User.create({
        'name': req.body.name,
        'cpf': req.body.cpf,
        'email': req.body.email,
        'password': bcrypt.hashSync(req.body.password, await bcrypt.genSalt(15)),
        'birth': req.body.birth,
        'createdAt': new Date(),
        'updatedAt': new Date(),
        'type': 0
    })
})

app.post('/registerVacinas', async(req, res) => {
    let reqs = await model.Vacinas.create({
        'name': req.body.name,
        'producer': req.body.producer,
        'dosage': req.body.dosage,
        'createdAt': new Date(),
        'updatedAt': new Date()
    })
})

app.post('/getHistorico', verifyUser, async(req, res) => {
    let reqs = await model.Historico.findAll()
    let data = []
    for (let i=0; i < Object.values(reqs).length; i++) {
        data.push({'vacina': reqs[i].vacina, 'user': reqs[i].user , 'createdAt': reqs[i].createdAt})
    }
    console.log(data)
    return res.json(data)
})



app.post('/getVaccines', verifyEmployee, async(req, res) => {
    let reqs = await model.Vacinas.findAll()
    let data = []
    for (let i=0; i < Object.values(reqs).length; i++) {
        data.push({'label': reqs[i].vacina, 'value': reqs[i].id})
    }
    return res.json(data)
})

app.post('/getVaccine', verifyEmployee, async(req, res) => {
    let reqs = await model.Vacinas.findOne({ where: { id: req.body.id } })
    return res.json(reqs)
})

app.post('/getUserByCPF', verifyEmployee, async(req, res) => {
    try {
        let reqs = await model.User.findOne({ where: { cpf: req.body.cpf}})
        return res.json({status: 'success', id: reqs.id, name: reqs.name})
    } catch (TypeError) {
        return res.json({status: 'fail', message: 'CPF inválido'})
    }
})

app.post('/applyVaccine', verifyEmployee, async(req, res) => {
    let reqs = await model.Historico.create({
        'user': req.body.userID,
        'vacina': req.body.vaccineID,
        'createdAt': new Date(),
        'updatedAt': new Date()
    })
    return res
})

let port = process.env.PORT || 3000
app.listen(port, (req, res) => {
    console.log('Running')
})
