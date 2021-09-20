// requires
const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// globals
const port = 5000;
// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
})
// routes

/****** template routes *******
app.get( '/NAME', ( req, res )=>{
    console.log( 'NAME GET hit' );
    res.send( THINGSTOSEND )
})

app.post( '/NAME', ( req, res )=>{
    console.log( 'NAME POST hit:', req.body );
    res.sendStatus( 200 ) // 200 = generic OK, 201 = created
})
 */
