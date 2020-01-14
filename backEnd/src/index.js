const express = require('express')
const mongoose = require('mongoose')
const routes = require('../src/routes')

const app = express()

mongoose.connect('mongodb+srv://rufino:32758485up@@cluster0-etzfl.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

// Metodos HTTP: GET,POST,PUT,DELETE
// TIPOS DE PARAMETROS EXPRESS

// Query Params: request.query (Filtros,Ordenacao,Paginacao,...)
// Route Params: request.params (Indentificar um recurso na alteração ou na remoção)
// Body: request.body (Dados para criação ou alteração de um registro)



app.listen(3333)