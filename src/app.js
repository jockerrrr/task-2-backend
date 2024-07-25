const express=require("express");
const app=express();
const port=process.env.PORT||3000;

// app.get('/',(req,res)=>{
//     res.send("hello home page")
// })
// app.get('/price',(req,res)=>{
//     res.send("hello price page")
// })
// app.get('/about',(req,res)=>{
//     res.send("hello about page")
// })

///////////////////////////////////////////////////////////////////////////
//نعرض صفحة static
// console.log(__dirname)
const path=require("path");
const { title } = require("process");
const pathdirectory=(path.join(__dirname,"../public"))
app.use(express.static(pathdirectory))

const viewsDirectory=path.join(__dirname,"../temp1/views")
app.set("views",viewsDirectory)

app.set('view engine', 'hbs');

var hbs=require("hbs")
const partialsPath=path.join(__dirname,"../temp1/partials")
hbs.registerPartials(partialsPath)

app.get('/',(req,res)=>{
res.render('index',{
    title:"HOME page",
    desc:"describe of home"
})
})
app.get('/about',(req,res)=>{
res.render('about',{
    title:"about page",
    name:"beso",
    age:21,
    city:"cairo"
})
})
app.get('/services',(req,res)=>{
res.render('services',{
    title:"services page",

    name:"heso",
    age:21,
    city:"cairo"
})
})
app.get('/contact',(req,res)=>{
res.render('contact',{
    title:"contact page", 
    name:"feso",
    age:21,
    city:"cairo"
})
})
app.get('/company',(req,res)=>{
res.render('company',{
    title:"company page",
    name:"mizo",
    age:21,
    city:"cairo"
})
})

app.listen(port,()=>{
    console.log("app is listening on port 3000")
})