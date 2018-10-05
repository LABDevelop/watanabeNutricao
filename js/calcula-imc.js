let titulo = document.querySelector(".titulo");
titulo.textContent = "Watanabe Nutrição";

let pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida){
        alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc (peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
    if(peso <= 0 || peso >= 200) {
        return false;
    } else
        return true;
}

function validaAltura(altura){
    if(altura <= 0 || altura >= 2.5){
        return false;
    } else
        return true;
}