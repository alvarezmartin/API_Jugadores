const multer = require('multer')

//const upload = multer({dest:"./imagenes"})

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./Imagenes")
    },
    filename:(req,file,callback)=>{
        const ext = file.originalname.split(".").pop()

        const nuevofilename="imagen-"+Date.now()+"."+ext

        callback(null,nuevofilename)
    }
})

const upload = multer({storage})

module.exports = upload