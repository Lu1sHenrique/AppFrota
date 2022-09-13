//importando modulos
const express=require('express')
const cors=require('cors')
const bodyParser=require('body-parser')
const models=require('../models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
let usuario=models.Usuario;
let tab_veiculos_reserva=models.Tab_veiculos_reserva;
let tab_veiculos_maxima=models.Tab_veiculos_maxima;
let tab_departamento=models.Tab_departamento;
let tab_condutor=models.Tab_condutor;
let tab_checkist_eletrica=models.Tab_checklist_eletrica;
let tab_checkist_combustao=models.Tab_checklist_combustao;

app.post('/login',async (req, res)=>{
    let response = await usuario.findOne({
        where:{nome_usuario:req.body.usuario, senha: req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify("error"))
    }else{
        res.send(response)
    }
})


/*app.get('/criarUsuario',async (req, res)=>{
    let criarUsuario=await usuario.create({ 
        nome_usuario: "teste", 
        senha: "teste",
        codigo_departamento: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        TabCondutorId: 0,
        TabDepartamentoId: 0 
    });
    res.send("Usuario criado com sucesso")
})*/

app.get('/criarChecklistCombustao',async (req, res)=>{
    let criarChecklistCombustao=await tab_checkist_combustao.create({ 
        carro_maxima_checklist_combustao: "S", 
        carro_reserva_checklist_combustao: "N",
        departamento_checklist_combustao: 5,
        condutor_checklist_combustao: "teste",
        placa_veiculo_checklist_combustao: "KMC-8544",
        km_inicial_checklist_combustao: 3000,
        foto_km_inicial_checklist_combustao: "teste foto inicial",
        km_final_checklist_combustao: 6000,
        foto_km_final_checklist_combustao: "teste foto final",
        rota_ronda_checklist_combustao: 1,
        troca_oleo_checklist_combustao: 6000,
        pneu_checklist_combustao:6000,
        createdAt: new Date(),
        updatedAt: new Date() 
    });
    res.send("Checklist enviado com sucesso")
})

app.get('/criarChecklistEletrica',async (req, res)=>{
    let criarChecklistEletrica=await tab_checkist_eletrica.create({ 
        departamento_checklist_eletrica: 5, 
        condutor_checklist_eletrica: "teste eletrica",
        placa_veiculo_checklist_eletrica: "HGF-8956",
        bateria_inicial_checklist_eletrica: 8,
        foto_bateria_inicial_checklist_eletrica: "teste foto inicial eletrica",
        bateria_final_checklist_eletrica: 5,
        foto_bateria_final_checklist_eletrica: "teste foto final eletrica",
        diferenca_bateria_checklist_eletrica: 3,
        createdAt: new Date(),
        updatedAt: new Date() 
    });
    res.send("Checklist enviado com sucesso")
})

app.get('/listaDepartamentos',async (req, res)=>{
    let listaDepartamentos=await tab_departamento.findAll({ 
        raw:true
    });
    res.send(listaDepartamentos)
})

app.get('/listaCondutores',async (req, res)=>{
    let listaCondutores=await tab_condutor.findAll({ 
        raw:true
    });
    res.send(listaCondutores)
})

app.get('/listaVeiculosMaxima',async (req, res)=>{
    let listaVeiculosMaxima=await tab_veiculos_maxima.findAll({ 
        raw:true
    });
    res.send(listaVeiculosMaxima)
})

app.get('/listaVeiculosReserva',async (req, res)=>{
    let listaVeiculosReserva=await tab_veiculos_reserva.findAll({ 
        raw:true
    });
    res.send(listaVeiculosReserva)
})

app.get('/atualizarSenha',async (req, res)=>{
    let atualizarSenha=await usuario.findByPk(1).then((response) => { 
        response.senha='testesenha'
        response.save()
    })
})

app.get('/deletarChecklistCombustao',async (req, res)=>{
    tab_checkist_combustao.destroy({
        where: {id:8}
    })
})

app.get('/deletarChecklistEletrica',async (req, res)=>{
    tab_checkist_eletrica.destroy({
        where: {id:8}
    })
})

let port=process.env.PORT || 3000;  
app.listen(port, (req, res)=>{
    console.log('Servidor rodando');
})