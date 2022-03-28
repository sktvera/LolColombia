const express = require('express');
const app = express()

app.get('/',(req, res)=>{
  res.send('la conexion ha diso exitosa')
});

app.listen(3000,()=>{
  console.log('servidor a la espera de conexiones')
})