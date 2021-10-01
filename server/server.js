// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const cors = require("cors")

// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use(cors())

app.use(express.json())

// globals
const port = 5000;
// spin up server

let passengers = [ { firstName: 'Commander', lastName: 'Wisdom' } ,
{ firstName: 'Teacher', lastName: 'Anthony' } 
]


app.listen( port, ()=>{
    console.log( 'server up on:', port );
})
// routes

app.get( '/passenger', (req, res)=>{
    res.send(passengers);
})


app.post( '/passenger', ( req, res )=>{
    console.log( 'NAME POST hit:', req.body );
    passengers.push(req.body)
    res.send(passengers) // 200 = generic OK, 201 = created
})
 
 