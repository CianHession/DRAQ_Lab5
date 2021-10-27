const express = require('express')
const app = express()
const port = 4000
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//envoke function send when on url /4000
app.get('/', (req, res) => {
    res.send('Welcome to Data Represntation & Querying');
})

//Created new url
app.get('/whatever', (req, res) => {
    res.send('Hi');
})

//Created /hello with name parameter
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})

//Movies route point returning json
app.get('/api/movies', (req, res) => {
   //Variable
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ]

    //Send json data + message appended to JSON
    //Status 200 - If Okay return this JSON data
    res.status(200).json({
        mymovies: movies,
        'message': 'Data Sent'
    })
})

//Get file and return directory index.html
app.get('/test', (req, res) => {
    //Return index
    res.sendFile(__dirname + '/index.html');
})

app.get('/name',(req, res) =>{
    //Query for data you want (fname,lname) - Bad Idea for data useage, vars plus var value shown in url
    res.send("Hello " + req.query.firstname + " " + req.query.lastname + "!");
})

//Use POST Method to hide data being in URL
app.post('/name', (req, res)=>{
    res.send("Goodbye " + req.body.firstname + " " + req.body.lastname + "!");
})

//Listen for http requests coming into server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})