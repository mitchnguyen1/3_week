console.log('connected')

//get all button
const getAllBtn = document.querySelector('#all')
//array of name buttons
const charBtns = document.querySelectorAll('.char-btns')
//age limit form and input
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
//create new form and input 
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
//section to append new element
const charContainer = document.querySelector('section')

const baseURL = 'http://192.168.1.3:4000'

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

//clearing the card section
function clearCharacters() {
  charContainer.innerHTML = ``
}

//create cards for all characters
const getAllChars = () => {
  axios.get(`${baseURL}/characters`).then(response =>{
    clearCharacters()
    for(let i = 0; i < response.data.length; i++){
      createCharacterCard(response.data[i])
    }
  }).catch(error =>{
    console.log(error)
  })
}
//create a single card per character chose
const getSingleChar = (event) => {
  console.log(event.target.id)
  axios.get(`${baseURL}/character/${event.target.id}`).then(res =>{
    clearCharacters()
    createCharacterCard(res.data)
  }).catch(err =>{
    console.log(err)
  })
}
//create add event listener to each person 
for(let i = 0; i < charBtns.length; i++){
  charBtns[i].addEventListener('click',getSingleChar)
}

//get chars by age
const getOldChars = (event) => {
  event.preventDefault()
  axios.get(`${baseURL}/character?age=${ageInput.value}`).then(res =>{
    clearCharacters()
    res.data.forEach(el => createCharacterCard(el))
  }).catch(err =>{
    console.log(err)
  })
}


//create new character
const createChar = (event) => {
  event.preventDefault()
  let newChar = {
    firstName: newFirstInput.value, 
    lastName: newLastInput.value, 
    gender: newGenderDropDown.value,
    age: newAgeInput.value, 
    likes: newLikesText.value.split(',')
  }
  axios.post(`${baseURL}/character`,newChar).then(res =>{
    clearCharacters()
    res.data.map(char => createCharacterCard(char))
  }).catch(err =>{
    console.log(err)
  })
}

createForm.addEventListener('submit', createChar)
getAllBtn.addEventListener('click',getAllChars)
ageForm.addEventListener('submit',getOldChars)