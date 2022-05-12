let botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', (event) => {
    event.preventDefault();

    let form = document.querySelector('#form-adiciona');

    let paciente = obterPacienteDoFormulario(form);

    let error = validaPaciente(paciente)
    if(error.length > 0){
        exibeMensagemDeErro(error)
        return;
    }

    adicionarPacienteNaTabela(paciente)

    form.reset();

    let mensagemDeErro = document.querySelector('#mensagemError');
    mensagemDeErro.innerHTML = "";

})

function adicionarPacienteNaTabela(paciente){
    let pacienteTr = montaTr(paciente);
    tabela.appendChild(pacienteTr);
}

function obterPacienteDoFormulario(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;
}

function montaTd(dado, classe) {

    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)

    return td
}

function montaTr(paciente) {
    let pacienteTr = document.createElement('tr');

    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr
}

function validaPaciente(paciente) {

    let erros = [];

    if (!validarPeso(paciente.peso))
        erros.push('Peso é invalido');
    if(!validarAltura(paciente.altura))
        erros.push('Altura é inválida');
    if(paciente.peso.length == 0)
        erros.push('O peso não pode ser em branco');
    if(paciente.altura.length == 0)
        erros.push('A altura não pode ser em branco');
    if(paciente.gordura.length == 0)
        erros.push('A gordura não pode ser em branco');
    if(paciente.nome.length == 0)
        erros.push('O nome não pode ser em branco');

    return erros

}

function exibeMensagemDeErro(error){
    let ul = document.querySelector('#mensagemError')
    ul.innerHTML = "";
    
    error.forEach((er) => {
        let li = document.createElement('li');
        li.textContent = er;
        li.style.color = 'red'
        ul.appendChild(li);
    })
}

