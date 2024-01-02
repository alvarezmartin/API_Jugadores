const express = require('express')
const route = express.Router()
const update = require('../Multer/configMulter')
const{crearArquero,traerArquero,traerDelantero,traerDefensor,traerMediocampista,traerDt,crearDefensor,crearMediocampista,crearDelantero,crearDt,editarArquero,eliminarArquero,editarDefensor,editarMediocampista,editarDelantero,editarDt, deleteArq, eliminarDefensor, eliminarMediocampista, eliminarDelantero, eliminarDt}=require('./jugadoresControllers')

route.get('/traerarquero',traerArquero)
route.get('/traerdefensor',traerDefensor)
route.get('/traermediocampista',traerMediocampista)
route.get('/traerdelantero',traerDelantero)
route.get('/traerdt',traerDt)

route.post('/creararquero',update.single("imagen"),crearArquero)
route.post('/creardefensor',update.single("imagen"),crearDefensor)
route.post('/crearmediocampista',update.single("imagen"),crearMediocampista)
route.post('/creardelantero',update.single("imagen"),crearDelantero)
route.post('/creardt',update.single("imagen"),crearDt)

route.put('/editararquero/:id',update.single("imagen"),editarArquero)
route.put('/editardefensor/:id',update.single("imagen"),editarDefensor)
route.put('/editarmediocampista/:id',update.single("imagen"),editarMediocampista)
route.put('/editardelantero/:id',update.single("imagen"),editarDelantero)
route.put('/editardt/:id',update.single("imagen"),editarDt)

route.delete('/eliminararquero',eliminarArquero)
route.delete('/eliminardefensor',eliminarDefensor)
route.delete('/eliminarmediocampista',eliminarMediocampista)
route.delete('/eliminardelantero',eliminarDelantero)
route.delete('/eliminardt',eliminarDt)

module.exports=route