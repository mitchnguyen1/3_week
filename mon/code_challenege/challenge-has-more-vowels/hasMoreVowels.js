// Write a function called hasMoreVowels that takes in one argument, word.
// When the function is called, return true if that word contains more vowels than non-vowels;
// otherwise, return false. The word will always be a single word, without any punctuation or spaces. 
// It will contain only uppercase and/or lowercase letters.

// If the phrase is over half vowels, it should return true:

// hasMoreVowels('moose')
// // true
// If it’s half vowels (or less), it’s false:

// hasMoreVowels('mice')
// // false

// hasMoreVowels('graph')
// // false
// Don’t consider “y” as a vowel:

// hasMoreVowels('yay')
// // false
// Uppercase vowels are still vowels:

// hasMoreVowels('Aal')
// // true




//lower case entire string
//define vowel array 
//define counter for vowels/consonant 
//for loop
    //check if i is in vowels
        //vowels++
    //consonant++
//return vowels > consonant

const hasMoreVowels = (str) => {
    let vowel = ['a','e','i','o','u']
    let vow = 0
    let con = 0
    let temp = str.toLowerCase()
    for(let i =0; i<temp.length;i++){
        if(vowel.includes(temp.charAt())){
            vow++
        }
        else{
            con++
        }
    }
    return vow > con
}

console.log(hasMoreVowels('moose'))
// true

// If it’s half vowels (or less), it’s false:
console.log(hasMoreVowels('mice'))
// false

console.log(hasMoreVowels('graph'))
// false

// Don’t consider “y” as a vowel:
console.log(hasMoreVowels('yay'))
// false

// Uppercase vowels are still vowels:
console.log(hasMoreVowels('Aal'))
// true

