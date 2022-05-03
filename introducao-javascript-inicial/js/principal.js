/*console.log("fiu carregado de um arquivo externo");*/
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista";

var pacinte = document.querySelector('#primeiro-paciente');

var tdPeso = pacinte.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = pacinte.querySelector(".info-altura");
var altura = tdAltura.textContent;

/*console.log(pacinte);

console.log(tdPeso);
console.log(peso);

console.log(tdAltura);
console.log(altura);
console.log(imc);*/

var tdImc = pacinte.querySelector(".info-imc");
/*var imc = peso / (altura * altura);
tdImc.textContent = imc;*/

var pesoEhValido  =true;
var alturaEhValida = true;


if (peso <= 0 || peso >= 1000) {
    console.log("Peso inválido!");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida!");
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}
