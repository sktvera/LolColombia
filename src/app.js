const express = require('express');
const app = express()
const path = require('path');

/* RUTAS */

app.use(require('./routes/index.routes'));

/* INICIA EL SERVIDOR CON = NPM RUN START */
app.listen(3000,()=>{
  console.log('servidor a la espera de conexiones')
})

/* view engine setup */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

/* Middlewares */
app.use(express.static(path.join(__dirname, '../public')))