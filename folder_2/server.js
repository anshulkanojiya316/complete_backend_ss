const express = require('express');

const app = express() // server instance create kr rahe hai 


app.get("/", (req,res) => {
    res.send("HELLO WORLD")
})

app.get("/about",(req,res) => {
    res.send("About page")
})
app.listen(3000) // server ko start kerne ke liye 