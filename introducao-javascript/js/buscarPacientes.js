let botaoBuscar = document.querySelector('#buscar-paciente');

botaoBuscar.addEventListener('click', function () {

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function () {
        let errorAjax = document.querySelector('#error-ajax');

        if (xhr.status == 200) {
            let rest = xhr.responseText;
            let paciente = JSON.parse(rest);
            paciente.forEach(element => {
                adicionarPacienteNaTabela(element)
            });
            errorAjax.classList.add('sumir')
        } else {
            errorAjax.classList.remove('sumir')
        }
    })

    xhr.send()
})