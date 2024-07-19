import express from 'express';
import cors from 'cors';
import fs from 'fs';
import {format} from 'date-fns';

const app = express();
app.use( cors() )
const PORT = 4000;


app.post( '/createfile', ( req, res )=>{
    let today = format( new Date(), "dd-mm-yyyy-hh-mm-ss" )
    const filepath = `timestamp/${today}.txt`
    fs.writeFileSync( filepath, `${today}`, 'utf-8')
    
    let data = fs.readFileSync( filepath,  )
    
    try{
        res.status(200).send(data)
    }catch(err){
        res.status(400).send(err)
    }
})
 
app.get( '/getfiles', ( req, res ) => {
    fs.readdir('timestamp', (err, files) => {
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(files)
        }
    })
})












app.listen(PORT, () => {
    console.log("APP is listening in the port:", PORT);
});





