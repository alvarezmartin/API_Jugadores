const mongoose= require("mongoose");
require('dotenv').config()

//const host="127.0.0.1:27017";
//const database='CRUD_River';

const user=process.env.USER
const pass=process.env.PASS

//mongoose connect()

// const main=async()=>{
//   await mongoose.connect(`mongodb://${host}/${database}`);
// }

const main=async()=>{
  await mongoose.connect(`mongodb+srv://${user}:${pass}@martinalvarez.5piqhlc.mongodb.net/?retryWrites=true&w=majority`);
}

main().then(()=>{
    console.log("Conexion exitosa a DB MongoDB")
}).catch((error)=>{console.log(error)})