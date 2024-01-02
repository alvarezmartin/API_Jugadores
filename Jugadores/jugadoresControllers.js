const modeloArquero = require('../schema/schemaArqueros')
const modeloDefensor = require('../schema/schemaDefensores')
const modeloMediocampista = require('../schema/schemaMediocampistas')
const modeloDelantero = require('../schema/schemaDelanteros')
const modeloDt = require('../schema/schemaDts')

//obtener la lista de arqueros/defensores/mediocampistas/delanteros/ct ----------------------------------------------------

const traerArquero = async(req,res)=>{
    console.log("Arqueros obtenidos exitosamente")
    const resultadoArq = await modeloArquero.find()
    res.send(resultadoArq)
}

const traerDefensor = async(req,res)=>{
    console.log("Defensores obtenidos exitosamente")
    const resultadoDef = await modeloDefensor.find()
    res.send(resultadoDef)
}

const traerMediocampista = async(req,res)=>{
    console.log("Mediocampistas obtenidos exitosamente")
    const resultadoMed = await modeloMediocampista.find()
    res.send(resultadoMed)
}

const traerDelantero = async(req,res)=>{
    console.log("Delanteros obtenidos exitosamente")
    const resultadoDel = await modeloDelantero.find()
    res.send(resultadoDel)
}

const traerDt = async(req,res)=>{
    console.log("Cuerpo tecnico obtenido exitosamente")
    const resultadoDt = await modeloDt.find()
    res.send(resultadoDt)
}

// crear jugadores -----------------------------------------------------------------------------------------

const crearArquero= async(req,res)=>{
    const{nombre,apellido}=req.body
    let imagen="http://localhost:4000/imagen/"+req.file.filename;

    const nuevoArquero = new modeloArquero({
        nombre:nombre,
        apellido:apellido,
        imagen:imagen
    }, {versionKey:false});
    const resultado = await nuevoArquero.save();
    res.status(201).send('Arquero creado correctamente')
}

const crearDefensor= async(req,res)=>{
    const{nombre,apellido}=req.body
    let imagen="http://localhost:4000/imagen/"+req.file.filename;

    const nuevoDefensor = new modeloDefensor({
        nombre:nombre,
        apellido:apellido,
        imagen:imagen
    }, {versionKey:false});
    const resultado = await nuevoDefensor.save()
    res.status(201).send('Defensor creado correctamente')
}

const crearMediocampista=async(req,res)=>{
    const{nombre,apellido}=req.body
    let imagen="http://localhost:4000/imagen/"+req.file.filename;

    const nuevoMediocampista = new modeloMediocampista({
        nombre:nombre,
        apellido:apellido,
        imagen:imagen
    }, {versionKey:false});
    const resultado = await nuevoMediocampista.save()
    res.status(201).send('Mediocampista creado correctamente')
}

const crearDelantero=async(req,res)=>{
    const{nombre,apellido}=req.body
    let imagen="http://localhost:4000/imagen/"+req.file.filename;

    const nuevoDelantero = new modeloDelantero({
        nombre:nombre,
        apellido:apellido,
        imagen:imagen
    }, {versionKey:false});
    const resultado = await nuevoDelantero.save()
    res.status(201).send('Delantero creado correctamente')
}

const crearDt=async(req,res)=>{
    const{nombre,apellido}=req.body
    let imagen="http://localhost:4000/imagen/"+req.file.filename;

    const nuevoDt = new modeloDt({
        nombre:nombre,
        apellido:apellido,
        imagen:imagen
    }, {versionKey:false});
    const resultado = await nuevoDt.save()
    res.status(201).send('Miembro creado correctamente')
}


// editar jugaores ------------------------------------------------------------------------------------------

const editarArquero=async(req,res)=>{
    const id=req.params.id;
    const {nombre,apellido}=req.body
    let imagen = "http://localhost:4000/imagen/"+req.file.filename;

    const resultado = await modeloArquero.updateOne({_id:id},{$set:{nombre:nombre,apellido:apellido,imagen:imagen}})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"}).redirect('/')}
    else {res.status(201).json({"message":"Arquero editado correctamente"})}
}

const editarDefensor=async(req,res)=>{
    const id=req.params.id;
    const {nombre,apellido}=req.body
    let imagen = "http://localhost:4000/imagen/"+req.file.filename;

    const resultado = await modeloDefensor.updateOne({_id:id},{$set:{nombre:nombre,apellido:apellido,imagen:imagen}})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Defensor editado correctamente"})}
}


const editarMediocampista=async(req,res)=>{
    const id=req.params.id;
    const {nombre,apellido}=req.body
    let imagen = "http://localhost:4000/imagen/"+req.file.filename;

    const resultado = await modeloMediocampista.updateOne({_id:id},{$set:{nombre:nombre,apellido:apellido,imagen:imagen}})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Mediocampista editado correctamente"})}
}

const editarDelantero=async(req,res)=>{
    const id=req.params.id;
    const {nombre,apellido}=req.body
    let imagen = "http://localhost:4000/imagen/"+req.file.filename;

    const resultado = await modeloDelantero.updateOne({_id:id},{$set:{nombre:nombre,apellido:apellido,imagen:imagen}})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Delantero editado correctamente"})}
}

const editarDt=async(req,res)=>{
    const id=req.params.id;
    const {nombre,apellido}=req.body
    let imagen = "http://localhost:4000/imagen/"+req.file.filename;

    const resultado = await modeloDt.updateOne({_id:id},{$set:{nombre:nombre,apellido:apellido,imagen:imagen}})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Miembro editado correctamente"})}
}

// eliminar jugadores ---------------------------------------------------------------------------------------

const eliminarArquero=async(req,res)=>{
    const {id}=req.body
    const resultado = await modeloArquero.deleteOne({_id:id})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Arquero eliminado correctamente"})}
}

const eliminarDefensor=async(req,res)=>{
    const {id}=req.body
    const resultado = await modeloDefensor.deleteOne({_id:id})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Defensor eliminado correctamente"})}
}

const eliminarMediocampista=async(req,res)=>{
    const {id}=req.body
    const resultado = await modeloMediocampista.deleteOne({_id:id})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Mediocampista eliminado correctamente"})}
}

const eliminarDelantero=async(req,res)=>{
    const {id}=req.body
    const resultado = await modeloDelantero.deleteOne({_id:id})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Delantero eliminado correctamente"})}
}

const eliminarDt=async(req,res)=>{
    const {id}=req.body
    const resultado = await modeloDt.deleteOne({_id:id})
    if (!resultado) {return res.status(500).json({"message":"Error en el server"})}
    else {res.status(201).json({"message":"Miembro eliminado correctamente"})}
}

module.exports={traerArquero,crearArquero,traerDefensor,crearDefensor,traerMediocampista,crearMediocampista,traerDelantero,crearDelantero,traerDt,crearDt,editarArquero,editarDefensor,editarMediocampista,editarDelantero,editarDt,eliminarArquero,eliminarDefensor,eliminarMediocampista,eliminarDelantero,eliminarDt}