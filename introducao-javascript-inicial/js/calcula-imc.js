
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida nutricionista - show";

var pacientes = document.querySelectorAll(".paciente");
/*console.log(pacientes);  */

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

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {/*peso <= 0 || peso >= 1000*/
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        
    }
    if (!alturaEhValida) {/*altura <= 0 || altura >= 3.00*/ 
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }
    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

  function validaPeso(peso){
      if(peso >= 0 && peso < 1000){
          return true;
      }else{
          return false;
      }
  }
  function validaAltura(altura){
      if(altura >= 0 && altura <= 3.0){
          return true;
      }else{
          return false;
      }
  }

function calculaImc(peso,altura){
     var imc = 0;
      imc = peso / (altura * altura);

      return imc.toFixed(2);
}
