const express = require('express')

const app = express()
app.use(express.json())
// Metodos HTTP: GET,POST,PUT,DELETE
// TIPOS DE PARAMETROS EXPRESS

// Query Params: request.query (Filtros,Ordenacao,Paginacao,...)
// Route Params: request.params (Indentificar um recurso na alteração ou na remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

app.post('/users',(request,response)=>{

    //console.log(request.query) //get
    //console.log(request.params)  //delete
    console.log(request.body)  //Post ou Put

    return response.json({message: "Hello OmmiStack"})

})

app.listen(3333)