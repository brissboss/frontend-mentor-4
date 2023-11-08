function toggleButton(event) {
    buttons.forEach(button => {
        if (button.id != event.target.id)
            button.className = 'button'
    })
    
    if (event.target.classList.contains('button'))
        event.target.className = 'button-active';
    else
        event.target.className = 'button'
}

function goToThanks(event) {
    let idButton = 0

    buttons.forEach(button => {
        if (button.classList.contains('button-active'))
            idButton = button.innerText
    })

    if (idButton == 0)
        return

    document.querySelector('.rating-card').className = "rating-card invisible"
    document.querySelector('.thank-card').className = "thank-card visible"

    document.querySelector('.text-info').innerText = "You selected " + idButton + " out of 5"

    history.pushState({page: 2}, "test", 'index.html')
}

function resetAll() {
    document.querySelector('.rating-card').className = "rating-card visible"
    document.querySelector('.thank-card').className = "thank-card invisible"

    buttons.forEach(button => {
        button.className = 'button'
    })
}

const buttons = document.querySelectorAll('.button')
const submitButton = document.querySelector('.button-submit')

buttons.forEach(button => {
    button.addEventListener('click', toggleButton)
});

submitButton.addEventListener('click', goToThanks)



window.addEventListener('popstate', resetAll);