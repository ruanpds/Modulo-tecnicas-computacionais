const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é o esporte social?",
        alternativas: [
            {
                texto: "Não tenho a menor ideia",
                afirmacao: "esporte social objetiva a inclusão social, visa à participação, ocupa-se com valores, preocupa-se com a socialização, submete-se à ludicidade, orienta-se para a equidade, enfatiza o lazer e resulta em integração"
            },
            {
                texto: "pra que serve?",
                afirmacao: "favorecerem a consciência corporal, libertam seus limites, aumentam suas potencialidades e desenvolvem o espírito de solidariedade, de cooperação e de respeito coletivo."
            }           
            
        ]
    },
    {
        enunciado: "Qual é a influência do esporte na cultura?",
        alternativas: [
            {
                texto:"Não tenho a menor ideia",
                afirmacao:"Estimula a boa comunicação e a resolução de conflitos. – Desperta valores essenciais como: amizade, solidariedade, confiança e cooperação. – Ensina a respeitar as limitações físicas e as diferenças culturais entre os indivíduos."
            },
            {
                texto: "eu nao sei qual sua influencia direta",
                afirmacao:"esporte é parte fundamental da cultura do país tomada como representação da identidade nacional, incorporando na sua prática os valores da sociedade"
            }
        ]
    },
    {
        enunciado: "o esporte é afetado pela poluição?",
        alternativas: [
            {
                texto:"Sim ele afeta nosso corpo",
                afirmacao:"Com a diminuição da oxigenação dos músculos, a produção de energia também é reduzida, fazendo com que a capacidade de realizar exercícios fique prejudicada"
            },
            {
                texto:"Quais esportes podem prejudicar o meio ambiente?",
                afirmacao:"O material particulado pode reduzir a quantidade de radiação solar que atinge a superfície do planeta, afetando a taxa na qual a água evapora e se move para a atmosfera"
            }
            
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();