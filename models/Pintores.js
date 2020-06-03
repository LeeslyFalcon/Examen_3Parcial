const moongose = require(`mongoose`);
//nuestra base de datos 

let Schema = moongose.Schema;
//crear la coleccion
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, `Requerimos el nombre`]
    },
    corriente:{
        type : String,
        required:[true, `Requerimos la corriente`]
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});
 module.exports = moongose.model( `Pintores`, PintoresSchema);

