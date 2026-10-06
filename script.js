// Definindo o espaço de preço do álcool e preço da gasolina
const input_alcool = document.getElementById("preco-alcool");
const input_gasolina = document.getElementById("preco-gasolina");

// Definido o botão de calcular
const botao_calcular = document.getElementById("botao-calcular");

// Definindo o texto de resultado da decisão
const resultado = document.getElementById("texto-resultado");

//BOTÕES DE TEMA
const botao_darkslateblue = document.getElementById("botao-darkslateblue");
const botao_dodgerblue = document.getElementById("botao-dodgerblue");
const botao_salmon = document.getElementById("botao-salmon");
const botao_goldenrod = document.getElementById("botao-goldenrod");
const botao_yellowgreen = document.getElementById("botao-yellowgreen");
const botao_chocolate = document.getElementById("botao-chocolate");

// Declarando as variáveis que vão receber o valor digitado nos inputs
let alcool;
let gasolina;

// Evento de clique do botão CALCULAR
botao_calcular.addEventListener("click", function() {
    // Atribuindo o valor digitado a variáveis
    alcool = Number(input_alcool.value);
    gasolina = Number(input_gasolina.value);

    if (alcool<gasolina) {
        resultado.textContent = "Utilizar ÁLCOOL vai sair mais barato.";
    } else if(alcool>gasolina) {
        resultado.textContent = "Utilizar GASOLINA vai sair mais barato.";
    } else {
        resultado.textContent = "As duas opções tem o MESMO PREÇO."
    }
});

// Configurando os botões de tema

botao_darkslateblue.addEventListener("click", function() {
    // ALTERAR COR DO FUNDO PARA DARK SLATE BLUE
    document.body.style.backgroundColor = "darkslateblue";
});

botao_salmon.addEventListener("click", function() {
    // ALTERAR COR DO FUNDO PARA SALMON
    document.body.style.backgroundColor = "salmon";
});

botao_goldenrod.addEventListener("click", function() {
    document.body.style.backgroundColor = "goldenrod";
});

botao_yellowgreen.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellowgreen";
});

botao_chocolate.addEventListener("click", function() {
    document.body.style.backgroundColor = "chocolate";
});

botao_dodgerblue.addEventListener("click", function() {
    document.body.style.backgroundColor = "dodgerblue";
});