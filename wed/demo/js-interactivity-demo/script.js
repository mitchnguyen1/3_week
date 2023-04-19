let counter = document.querySelector('#counter')
let counterNum = counter.textContent
let minus = document.getElementById('minus-btn')
let plus = document.getElementById('plus-btn')
let reset = document.getElementById('reset-btn')

function add() {
    counterNum++
    counter.innerHTML = counterNum
}
function sub() {
    if((counterNum-1) >= 0){
        counterNum--
        counter.innerHTML = counterNum
    }
}
plus.addEventListener('click',add)
minus.addEventListener('click',sub)
reset.addEventListener('click',function(){
    counter.textContent = 0
    counterNum = 0
})


