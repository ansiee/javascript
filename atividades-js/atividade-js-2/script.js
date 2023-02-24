// Atividade 02

/*
    Crie um script que faça a conversão da temperatura de graus Celsius para Farenheit

*/

let temperatura = parseInt(prompt('Digite a temperatura em graus Celsius'));
let temperaturaFarenheit;

temperaturaFarenheit = temperatura * 1.8 + 32
document.getElementById('info').innerHTML = `A temperatura é de ${temperaturaFarenheit}.`;