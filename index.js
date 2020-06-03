const express = require(`express`);
const hbs = require(`hbs`);
const mongoose = require(`mongoose`);
//constante del puerto
const PUERTO = process.env.PORT || 3000;

//emplar rutas
let pintoresRouter = require(`./routes/pintor`);

//sitio web y HBS
const app = express();
app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);
app.use(express.static(__dirname + `/public`));

//express la ruta a emplear 
app.use(`/`, pintoresRouter);
/*La conexión con MongoDB*/
mongoose.Promise = global.Promise;
const cadena = `mongodb+srv://lees_8322:12345@falconmartinez-z2re7.mongodb.net/exam?retryWrites=true&w=majority`
mongoose.connect(cadena, {useNewUrlParser: true, useUnifiedTopology: true})
   .then(()=>{
       console.log(`Conexión establecida :)`)
   })
   .catch(err=> console.log(err));

  /*arrancar el servidor web*/ 
  app.listen(PUERTO, ()=>{
      console.log(`Escuchando el puerto...`)
  });