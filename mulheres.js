const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
  {
    nome: 'Ana Beatriz Ferreira',
    image: 'https://github.com/anabfer.png',
    minibio: 'Graduada do Bootcamp da Laboratoria'
  },
  {
    nome: 'Erika Peloggia',
    image: 'https://github.com/erikapeloggia.png',
    minibio: 'Em transição de carreira para área de Tecnologia'
  },
  {
    nome: 'Iana Rodrigues',
    image: 'https://github.com/ianarodrigues.png',
    minibio: 'Entusiasta da área de tecnologia e de UX design'
  }
]

function mostraMulheres(request, response) {
  response.json(mulheres)
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)