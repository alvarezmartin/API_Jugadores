const express=require('express');
const server=express();
const port=4000;
const jugadoresRoutes = require('./Jugadores/jugadoresRoutes.js')
const cors = require('cors')

require('./config/db.js')//nos traemos la coneccion a la DB MongoDB

server.use(cors())
server.use(express.json())
server.use(express.urlencoded({extended:true}))
server.use('/imagen',express.static("./Imagenes"))

server.use("",jugadoresRoutes)

server.listen(port,()=>{
    console.log("Server corriendo en el puerto "+ port)
})