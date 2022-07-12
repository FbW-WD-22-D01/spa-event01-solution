const list = document.querySelector('ul')
const btn = document.querySelector('#visibilityBtn')
const liItems = document.querySelectorAll('li')
const result = document.querySelector('#result')

btn.addEventListener('click', (event) => {
    //Liste anzeigen/ausblenden
    list.classList.toggle('d-none')
    
    //Text des Buttons ändern
    if (event.target.textContent === 'Show Items'){
        event.target.textContent = 'Hide Items' 
    } else {
        event.target.textContent = 'Show Items'
    }
   
    // Das result wird nur angezeigt wenn die Liste angezeigt wird
    result.classList.toggle('d-none')
})

const itemClick = (event) => {
    
    //Das geklickte Element wird blau gefärbt
    const old = document.querySelector('.active')
    old.classList.remove('active')
    event.target.classList.toggle('active')
    
    // Der Text des Elements wird weiter unten angezeigt
    const item = event.target.textContent    
    result.textContent= `You selected: ${item}` 
}

//Event Listener für jedes Listenelement
liItems.forEach(item => {
    item.addEventListener('click', itemClick)
})