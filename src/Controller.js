//importando modulos
import express from 'express';
import cors from 'cors';
import { urlencoded } from 'body-parser';

const app=express();
app.use(cors());
app.use(urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.send('Meu servidor backend ja esta rodando')
})

let port=process.env.PORT || 3000;  
app.listen(port, (req, res)=>{
    console.log('Servidor rodando');
})