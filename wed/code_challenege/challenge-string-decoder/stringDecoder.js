// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

// Here are a few more examples:
                
// '0h2xce5ngbrdy' => 'hey'
// '3vdfn' => 'n'
// '0r' => 'r'
// '2bna0p1mp2osl0e' => 'apple'
// '0y4akjfe0s' => 'yes'

//each number will tell how many iterations to add to i
//if i === number, i += i(Number.isInteger())
//add letter to ans string
//return ans
const decoder = code => {
    //ans string to push each letter 
    let ans = ""
    for(let i = 0; i<code.length;i++){
        //Num.isInteger(boolean) if it's a number
        //+ turns a string into num
        //code.charAt() selecting each character
        if(Number.isInteger(+code.charAt(i))){
            //increment or skip over by the secret key
            i+=(+code.charAt(i))
        }else{
            //add the secret letter to the ans
            ans += code.charAt(i)
        }
    }
    return ans
}

console.log(decoder('0h2xce5ngbrdy'))
console.log(decoder('2bna0p1mp2osl0e'))
console.log(decoder('0y4akjfe0s'))
console.log(decoder('0o2esr'))