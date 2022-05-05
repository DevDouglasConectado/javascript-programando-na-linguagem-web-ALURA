
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
/*
titulo.addEventListener("click", function(){
         console.log("Ola eu fui clicado");
});
 titulo.addEventListener("click",mostraMensagem);

 function mostraMensagem(){
     console.log("Ola eu fui clicado");
 }
*/ 
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
   event.preventDefault();
    
   var form = document.querySelector("#form-adiciona")

   var nome = form.nome.value;
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;

   var pacienteTr = document.createElement("tr");
   
   var nomeTd = document.createElement("td");
   var pesoTd = document.createElement("td");
   var alturaTd = document.createElement("td");
   var gorduraTd = document.createElement("td");
   var imcTd = document.createElement("td");
 
   nomeTd.textContent = nome;
   pesoTd.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;

   pacienteTr.appendChild(nomeTd);
   pacienteTr.appendChild(pesoTd);
   pacienteTr.appendChild(alturaTd);
   pacienteTr.appendChild(gorduraTd);

   var tabela = document.querySelector('#tabela-pacientes');
   tabela.appendChild(pacienteTr);
   
});
titulo.addEventListener("click",function(){
    console.log("fui clicado");
});
