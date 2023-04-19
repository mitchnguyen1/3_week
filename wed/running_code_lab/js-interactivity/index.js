let form = document.querySelector('form')
let message = document.querySelector('#message')

const addMovie = (event) => {
    let inputField = document.querySelector('input')
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    let list = document.querySelector('ul')
    let deleteBtn = document.createElement('button')
    //forms default will send data to server, since we're testing, we dont want that 
    event.preventDefault()
    //setting title of element as input
    movieTitle.textContent=inputField.value
    //add event listener to span for a click to cross off
    movieTitle.addEventListener('click',crossOffMovie)
    //adding to list item the title
    movie.appendChild(movieTitle)
    //creating delete button
    deleteBtn.textContent = 'X'
    movie.appendChild(deleteBtn)
    //add event listener to it
    deleteBtn.addEventListener('click',deleteMovie)
    //adding list item to list
    list.appendChild(movie)
    //clearing text box
    inputField.value = ""
}

const deleteMovie = (event) => {
    //button is a child of the list, we can use this to remove
    //target == button thats clicked
    event.target.parentNode.remove()
    //add message
    let title = event.target.parentNode.textContent
    let noX = title.substring(0,title.length-1)
    message.textContent = `${noX} deleted!`
    revealMessage()
}

const crossOffMovie = (event) => {
    //target == movie title 
    //toggle the checked class
    event.target.classList.toggle('checked')
    //add message
    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    }
    else{
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(()=>{
        message.classList.add('hide')
    },1000)
}

form.addEventListener('submit',addMovie)