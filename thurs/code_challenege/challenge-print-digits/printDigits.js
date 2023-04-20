// Write a function called printDigits that takes in one argument, num. When given an integer, the function should print (console.log) each digit in reverse order, starting with the ones place. Do not do this by just turning the number into a string and reversing it. Solve the problem using math. (Hint: look up while loops, and don’t forget about the % operator.)

// For example, if you were given 1 you should simply print 1, if given 314 you should print 4, 1, 3, and if given 12 you should print 2, 1:

// printDigits(1)
// // 1

// printDigits(314)
// // 4
// // 1
// // 3

// printDigits(12)
// // 2
// // 1

//314 % 10 = 4(temp)
//314 - temp = 310/10 =math.floor(31(temp2))
//printDigits(temp2)
//dont return if you have to print each num separately
//dont call inside console log if theres no return 
const printDigits = num => {
    while(num != 0){
        //temp is the last digit
        let temp = num % 10
        //subtract the last digit and remove the 0
        num = (num-temp)/10
        console.log(temp)
    }
}

printDigits(314)
printDigits(1) 
printDigits(12)