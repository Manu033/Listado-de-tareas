import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

let month = new Date().getMonth();
let day = new Date().getDate();
let numDia = new Date().getDay();
let mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"];
let dia=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
let tareas = [];
let tareasWork = [];


app.get("/", (req,res)=>{
    res.render("index.ejs",{
        tareas: tareas,
        mes: mes[month],
        dia: dia[numDia],
        day: day
    });
});
app.post("/submit", (req,res)=>{
    tareas.push(req.body["tarea"]);
    res.redirect("/");
}); 

app.get("/work", (req,res)=>{ 
    res.render("work.ejs",{
        tareasWork: tareasWork
    });
});
app.post("/submitWork", (req,res)=>{
    tareasWork.push(req.body["tarea"]);
    res.redirect("/Work");
});

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
});

