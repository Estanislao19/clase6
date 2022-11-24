//PARA INICIAR SERVIDOR
/*/const http = require('http')
const puerto = 8080
const server = http.createServer((req, res)=>{ //Para crear nuestro servidor
console.log('Llego una peticion')
res.end('Beinvenido a mi servidor')
})

server.listen(puerto, ()=>{ 
console.log(`Servidor escuchando puerto ${puerto}`)
})*/

/*const http = require('http')
const puerto = 8080
const server = http.createServer((req, res)=>{ //Para crear nuestro servidor
const hora =new Date().getHours()
if(hora >= 6 && hora<=12){
    res.end('Buenos dias')
}else if(hora >=13 && hora <=19){
    res.end('Buenas tardes')
}else if(hora >=20 || hora <=5){
    res.end('Buenas noches')
}
res.end()
})

server.listen(puerto, ()=>{ 
console.log(`Servidor escuchando puerto ${puerto}`)
})
*/

/*const express = require('express')
const app = express()
const puerto =8080

app.get('/',(req,res)=>{
    res.status(200).send('Hola soy home')
    res.send('<p style="color:red">Hola soy home </p>')
})
app.get('/user/:nombre',(req,res)=>{
    const nombre = req.params.nombre
    res.send(`Hola ${nombre} bienvenidos`)

})
app.get('/publicaciones',(req,res)=>{
    res.send('Hola soy ruta publicaciones')
})

app.listen(puerto, ()=>{
    console.log(`Servidor escuchando puerto:${puerto}`)
})
*/
const express = require('express')
const app = express()
const puerto =8080
let visitas = 0;


app.get('/',(req,res)=>{//h1 con color azul
    res.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>')
})

app.get('/visitas',(req,res)=>{
    visitas ++ 
    res.send(`El servidor tuvo ${visitas} visitas`)
})

app.listen(puerto, ()=>{
    console.log(`Servidor escuchando puerto:${puerto}`)
})

app.get('/fyh',(req,res)=>{
    res.send(new Date())
})