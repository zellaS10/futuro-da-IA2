const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já ouviu falar em inteligência artificial?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você acha que a IA facilita o aprendizado?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você sente que aprende mais rápido quando usa algum recurso com IA?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você confia nas respostas que a inteligência artificial te dá?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você gostaria que a IA estivesse mais presente nas aulas?",
        alternativas: ["Sim", "Não"]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // limpa botões antigos
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += `Você respondeu: ${opcaoSelecionada}.\n`;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();