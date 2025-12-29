const express =  require("express");
const app = express();
const port = 8080;
const path = require("path");
const{v4: uuidv4} =  require("uuid");


const blogs = [
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