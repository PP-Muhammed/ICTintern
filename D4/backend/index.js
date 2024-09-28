//import
var express = require("express")
require('./connection')
var empModel = require('./models/employee')
var cors=require("cors")

//initialize
var app = express()

//middleware
app.use(express.json())
app.use(cors())



//api creation
app.get('/details', (req, res) => {
    res.send("employee app")
})

//add api
app.post('/add', async(req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message:"data added"})
    } catch (error) {
        console.log(error)
    }
})
app.get('/view', async (req, res) => {
    try {
        var data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
app.delete('/delete/:id', async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Employee deleted successfully" })
    } catch (error) {
        console.log(error)
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send("Employee updated successfully")
    } catch (error) {
        console.log(error)
    }
    
 })

//port
app.listen(3043, () => {
    console.log("port is running")
})
