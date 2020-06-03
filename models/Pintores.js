const moongoose = require('mongoose');
//nuestra base de datos 

let Schema = moongoose.Schema;
//crear la coleccion
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type : String,
        required:[true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String
    },
    pintura:{
        type: String
    }
});
 module.exports = moongoose.model( 'Pintores', PintoresSchema);

