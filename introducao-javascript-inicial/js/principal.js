
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista - show";

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);  

for (var i = 0; i < pacientes.length; i++) {
    console.log(pacientes[i]);

    var paciente = pacientes[i];
    /*peso*/
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    /*altura*/ 
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc");

    var pesoEhValido = true;
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        /**style:para acessa os estilos.
         * textContent: acessa o conteudo de texto HTML
         * classList: retorna todas as classes daquele objeto,retorna alguns metodos
         * metodo .add - permite adicionar uma nova classe a quele obeto.
         * 
         * 
         */
        /* paciente.style.backgroudColor = "red";*/
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");

    }

  if (alturaEhValida && pesoEhValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}