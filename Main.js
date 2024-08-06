const express = require('express'); 
 const Main_sql = require('mysql');
 const path = require('path');

/**
 * esto es paa crear la conexion a la dbd
 */
const oConnection = Main_sql.createConnection(
{
    host: 'localhost',
    database: 'test_wed',
    user: 'root',
    password: ''
}
);



const app = express(); 
const port = 3100; 
app.set ("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
/** esto es para crear transaccion  */


app.use(express.urlencoded({extended: false}) );
app.use(express.static("public"))



/** termina el codgio de crar transaccion */
app.get ('/',(req,res)=>{
    res.render('index'); 
} ); 
/**esta parte tiens que cambiar por las paginas wed que estes utilizando el momento: POR EJMPLO DEBES DE HABILIDADES TU PAGINA WED  */
app.get ('/principal',(req,res)=>{
    res.render('principal'); 
} ); 

app.post('/iniciarSesion',(req,res)=>{
    const {correoInicio,contraInicio} =req.body;

    oConnection.query( `SELECT * FROM usuario where Correo = ${correoInicio} and contraseña = ${contraInicio}`), 
(error,results)=>{
if(error){
console.error(error);
return res.status();

}
else{
    console.log("esta bien ")
    res.redirect('/principal')
}

}


    
})



app.listen(port,()=>{
    console.log(`Servidor levantado, puerto: ${port}`);
}); 