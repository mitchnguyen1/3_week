const pizzas = document.querySelectorAll('.pizzaItem')


const pizzaAlert = event =>{
    let pizza = event.target.getAttribute('value')
    alert(`you like ${pizza}`)
}

//turn node list into array and apply event listener
let pizzaArr = [...pizzas]

pizzaArr.map(el => el.addEventListener('click',pizzaAlert))