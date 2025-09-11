const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Você já ouviu falar em inteligencia artificial? "
        Alternativas; [
            "Sim"
            "Não"
        ]
    },
    {
        enunciado: "Você acha que a AI facillita o aprendizado?"
     alternativas: [
        "Sim"
        "Não"
    ]
},
{
    enunciado: "Você sente que aprende mais rápido quando usa algum recurso com IA?"
    alternativas: [
        "Sim"
        "Não"
    ]
},
{
    enuncido: " Você confia nas respostas que a inteligência artificial te dá?"
    alternativas: [
        "Sim"
        "Não"
    ]
},
{
    enunciado: "Você gostaria que a IA estivesse mais presente nas aulas? "
    alternativas: [
        "Sim"
        "Não"
    ]
},
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternatives);
    }
}

function respostaSelecionada(opcaoSelecionaada){
    const afirmacoes = opcaoSelecionaada.afirmacoes;
    histiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();