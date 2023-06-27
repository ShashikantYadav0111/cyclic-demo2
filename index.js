require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const path = require('path');

const Character = require('./models/Character')



const PORT = process.env.PORT||3001;
const app = express();


mongoose.set('strictQuery',false);
app.use(cors());
app.use(express.json());
app.use(bodyparser.json({ type: 'application/json' }));



const connectDb = async ()=>{
    try{
        const conn = await mongoose.connect(MONGO_URI);
    }catch(error){
        console.log(error);
    }
}


app.get('/',async (req,res)=>{
    try{

        const zoro = Character({
            id:1,
            name:"Roronoa Zoro",
            age:"21",
            occupation:"Pirate",
            imageuri:"https://wallpapercave.com/wp/wp9720320.jpg",
        });
        
        await zoro.save();
        console.log(zoro);
        res.json(zoro);
    }catch(error){
        console.log(error);
    }
})


app.get('/characters',async (req,res)=>{
    const charaters = await Character.find();

    if(charaters){

        res.json(charaters);
    }else{
        res.send('Something Went wrong')
    }
});

app.post('/add',async (req,res)=>{
    const body = req.body;
    const newCharacter = Character(body);
    console.log(newCharacter)
    await newCharacter.save();
});


app.use(express.static(path.join(__dirname,'./frontend/build')));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Listening on PORT: ${PORT}`)
    })
})