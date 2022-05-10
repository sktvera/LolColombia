const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE




// ************ express() - (don't touch) ************
const app = express();

// ************ Middlewares - (don't touch) ************
app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


/* view engine setup */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route System require and use()

const indexRoutes = require('./routes/indexRoutes.js')
const usersRoutes = require ('./routes/usersRoutes.js')
 const guiasRoutes = require('./routes/guiasRoutes'); 

/* INICIA EL SERVIDOR CON = NPM RUN START */
app.listen(3500,()=>{
  console.log('servidor a la espera de conexiones')
})


//Ruta global http://localhost/home
//usar localhost:3000/
app.use('/',indexRoutes)
app.use('/users',usersRoutes)
app.use('/guias', guiasRoutes);


// ************ DON'T TOUCH FROM HERE ************
// ************ catch 404 and forward to error handler ************
app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// ************ exports app - dont'touch ************
module.exports = app;









