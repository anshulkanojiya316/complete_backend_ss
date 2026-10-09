// for creating  the server

const express = require("express")



const app = express()  // server ka instance 
app.use(express.json())  // readable bnane ke liye data ko

const notes = []

//post /notes
app.post('/notes', (req, res) => {
    notes.push(req.body)

    res.status(201).json({
        message: "note created successfully"
    })
})

//get /notes
app.get('/notes', (req, res) => {

    res.status(200).json({
        message: "notes fetched sucessfully",
        notes: notes
    })
})

// delete /notes

app.delete('/notes/:index', (req,res) => {
    const index = req.params.index

    console.log(index)

    delete notes[index]

    res.status(200).json({
        message: "note deleted sucessfully "
    })

})

app.patch('/notes/:index', (req,res) => {
    const index= req.params.index
    const description = req.body.description

    notes[ index].description = description

    res.status(200).json({
        message:"note updated sucessfully "
    })




})

module.exports = app