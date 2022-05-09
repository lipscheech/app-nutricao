let campoFiltro = document.querySelector('#filtrarTabela');

campoFiltro.addEventListener('input', function () {
    let pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        pacientes.forEach((p) => {
            let nome = p.querySelector('.info-nome').textContent;

            let expressao = new RegExp(this.value, 'i');

            if (expressao.test(nome))
                p.classList.remove('sumir')
            else
                p.classList.add('sumir')
        })
    } else {
        pacientes.forEach((p) => {
            p.classList.remove('sumir')
        })
    }
})
