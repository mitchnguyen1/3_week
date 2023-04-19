let themeBtn = document.querySelectorAll(".theme-buttons")
let body = document.querySelector('body')
let main = document.querySelector('main')
let btns = document.querySelectorAll('buttons')

//target the class list of themeBtns
let themeSelector = (event) => {
    //theme will be the text of the button the user clicks on from the list of themeBtns
    let theme = event.target.textContent 
    //adding class name to body/main
    body.className = theme
    main.className = theme
}

for(let i = 0; i < themeBtn.length; i++){
    themeBtn[i].addEventListener('click',themeSelector)
}
