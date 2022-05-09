tabela.addEventListener('dblclick', (event) => {
    if(event.target.tagName == 'TD'){
        event.target.parentNode.classList.add('fadeout');
        setTimeout(() =>{
            event.target.parentNode.remove()
        }, 500)
    }
})