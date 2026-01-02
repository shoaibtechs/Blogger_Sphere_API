const express =  require("express");
const app = express();
const port = 8080;
const path = require("path");
const{v4: uuidv4} =  require("uuid");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

let blogs = [
  {
    id: uuidv4(),
    title: "Why MERN Stack is King in 2025",
    content: "MERN stack allows for faster development cycles and a unified language (JavaScript) across the entire stack, making it the top choice for startups.",
    author: "Shoaib Akhtar",
    category: "Tech"
  },
  {
    id: uuidv4(),
    title: "The Art of Writing Clean Code",
    content: "Clean code is not just about making it work; it's about making it readable for others. Focus on naming conventions and modular functions.",
    author: "Mentor",
    category: "Coding"
  },
  {
    id: uuidv4(),
    title: "Mastering the RESTful API Pattern",
    content: "REST is an architectural style that uses HTTP requests to GET, PUT, POST, and DELETE data. Mastering these routes is key for any backend dev.",
    author: "Shoaib Akhtar",
    category: "Development"
  },
  {
    id: uuidv4(),
    title: "How to Manage Overthinking as a Dev",
    content: "Overthinking can be a superpower if channeled into debugging. Take breaks and trust your logic when the code finally runs.",
    author: "Life Mentor",
    category: "Life"
  }
];



app.listen(port, ()=>{

    console.log(`The server is listening at port ${port}`);


})


app.get("/", (req, res)=>{


    res.send(`You contacted the root path `);

})


app.get("/blogs", (req, res)=>{

    res.render("index", {blogs});



})


app.get("/blogs/new",(req, res)=>{

    res.render("new");



})


app.post("/blogs", (req, res)=>{

    let{title, content, author, category} = req.body;
    let id = uuidv4();
    blogs.push({id, title, content, author, category});

    res.redirect("/blogs");



})


app.get("/blogs/:id", (req, res)=>{

    let {id} = req.params;
    let blog =  blogs.find((b)=> id === b.id);

    res.render("show", {blog});




})


app.get("/blogs/:id/edit", (req, res)=>{

    let {id} = req.params;
    let blog =  blogs.find((b)=> id === b.id);
    res.render("edit", {blog});



})


app.patch("/blogs/:id", (req, res)=>{


  let{id} =  req.params;
  let newContent =  req.body.content;
  let blog = blogs.find((b)=> id ===b.id);
  console.log(blog);
  blog.content =  newContent;

  res.redirect("/blogs");


})


app.delete("/blogs/:id", (req, res)=>{


  let{id} =  req.params;
  blogs = blogs.filter((b)=> id !==b.id);
  res.redirect("/blogs");



})

