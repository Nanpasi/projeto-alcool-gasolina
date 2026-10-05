// Definindo o espaço de preço do álcool e preço da gasolina
const input_alcool = document.getElementById("preco-alcool");
const input_gasolina = document.getElementById("preco-gasolina");

// Definido o botão de calcular
const botao = document.getElementById("botao-calcular");

// Definindo o texto de resultado da decisão
const resultado = document.getElementById("texto-resultado");

// Declarando as variáveis que vão receber o valor digitado nos inputs
let alcool;
let gasolina;

// Evento de clique do botão
botao.addEventListener("click", function() {
    // Atribuindo o valor digitado a variáveis
    alcool = Number(input_alcool.value);
    gasolina = Number(input_gasolina.value);

    if (alcool<gasolina) {
        resultado.textContent = "Utilizar ÁLCOOL vai sair mais barato.";
    } else {
        resultado.textContent = "Utilizar GASOLINA vai sair mais barato.";
    }
});