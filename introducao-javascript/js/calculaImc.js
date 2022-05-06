let tabela = document.querySelector('#tabela-pacientes');
let titulo = document.querySelector('.titulo');
let pacienteClass = document.querySelectorAll('.paciente');

titulo.textContent = 'Aparecida Nutricionista';

pacienteClass.forEach((p) => {
    let pacientePeso = p.querySelector('.info-peso').textContent;
    let pacienteAltura = p.querySelector('.info-altura').textContent;
    let imc = p.querySelector('.info-imc');

    console.log(validarPeso(pacientePeso), validarAltura(pacienteAltura));

    let pesoValido = validarPeso(pacientePeso);
    let alturaValida = validarAltura(pacienteAltura);

    if (pesoValido) {
        imc.textContent = "Peso inválido!";
        p.classList.add('paciente-invalido');
    }

    if (alturaValida) {
        imc.textContent = "Altura inválida!";
        p.classList.add('paciente-invalido')
    }

    if (!alturaValida && !pesoValido) {
        imc.textContent = calculaImc(pacientePeso, pacienteAltura);
    }
})

function calculaImc(peso, altura) {
    return (peso / altura ** 2).toFixed(2)
}

function validarPeso(peso){
    if(peso >= 0 && peso <= 100)
        return false
    return true
}

function validarAltura(altura){
    if(altura >= 0 && altura <= 3)
        return false
    return true
}


