import express from 'express';
import { PrismaClient } from './generated/prisma/client.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const prisma = new PrismaClient()



//Rota para listar todas as chuteiras
app.get('/chuteiras', async (req, res) => {

    const chuteiras = await prisma.Chuteira.findMany()
    res.status(200).json(chuteiras)
})

//rota para achar uma única chuteira
app.get('/chuteiras/:id', async (req, res) => {

    const chuteira = await prisma.Chuteira.findUnique({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json(chuteira)
})


//Rota para cadastrar uma nova chuteira
app.post('/chuteira-cadastrada', async (req, res) => {
    const chuteiraCadastrada = await prisma.Chuteira.create({
        data: {
            name: req.body.name,
            tag: req.body.tag,
            price: req.body.price,
            size: req.body.size,
            description: req.body.description,
            tech: req.body.tech,
            imgUrl: req.body.imgUrl
        }
    })

    res.status(201).json(chuteiraCadastrada)
})


//Rota para atualizar uma chuteira existente
app.put('/chuteiras/:id', async (req, res) => {

    const chuteiraAtualizada = await prisma.Chuteira.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            tag: req.body.tag,
            price: req.body.price,
            size: req.body.size,
            description: req.body.description,
            tech: req.body.tech,
            imgUrl: req.body.imgUrl
        }
    })

    res.status(200).json(chuteiraAtualizada)
})

//Rota para deletar uma chuteira existente
app.delete('/chuteiras/:id', async (req, res) => {
    await prisma.Chuteira.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Chuteira deletada com sucesso' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})