const express = require('express')
const path = require('path')
const methodOverride =  require('method-override');// Para poder usar los métodos PUT y DELETE


const app = express()

/* Middlewares */
app.use(express.static(path.join(__dirname, '../public')))
app.use(methodOverride('_method')); // Para poder pisar el method="POST" en el formulario por PUT y DELETE

/* view engine setup */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


// Route System require and use()

const indexRoutes = require('./routes/indexRoutes.js')
const usersRoutes = require('./routes/usersRoutes.js')

/* INICIA EL SERVIDOR CON = NPM RUN START */
app.listen(3000,()=>{
  console.log('servidor a la espera de conexiones')
})


//pagina home
//usar localhost:3000/
app.use('/',indexRoutes)

//pagina detalle producto
//usar localhost:3000/home
app.use('/home',indexRoutes)

//pagina carrito
//usar localhost:3000/login
app.use('/login', usersRoutes)

//pagina registro usuario
//usar localhost:3000/register
app.use('/register', usersRoutes)










