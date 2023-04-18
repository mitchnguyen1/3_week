// This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.

// The best function will be given an array of stock prices in the order they happened throughout the day.

// It should return the maximum possible profit on the stock for that day.

// For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:

// best([15, 10, 20, 22, 1, 9])
// 12
// Here are some more examples with positive profit:

// best([1, 2, 3, 4, 5])
// // 4 - buy at $1, sell at $5

// best([2, 3, 10, 6, 4, 8, 1])
// // 8 - buy at $2, sell at $10

// best([7, 9, 5, 6, 3, 2])
// // 2 - buy at $7, sell at $9

// best([0, 100])
// // 100 - buy at $0, sell at $100
// If no profit is possible, return $0:

// best([5, 4 , 3, 2, 1])
// // 0

// best([100])
// // 0

// best([100, 0])
// // 0

//define profit 
//find highest profit for each element , replace profit if higher
//nested for loop 
    //i is first el
    //j is second
        //if profit < j - i = profit, reassign
//return profit

const best1 = (arr) => {
    if(arr.length === 1 || arr.length === 0){
        return 0;
    }
    let profit = 0;
    for(let i =0;i<arr.length; i++){
        for(let j = i+1;j<arr.length;j++ ){
            if(arr[j]-arr[i] > profit){
                profit = arr[j]-arr[i]
            }
        }
    }
    return profit;
}



const best = arr => {
    //define the start date(first element)
    let lowest = arr[0]
    //define the profit 
    let max = 0;
    //iterate through the array
    for(let i = 1; i<arr.length;i++){
        //replace if i is a lower number
        if(arr[i] < lowest){
            //reassign lowest
            lowest = arr[i]
        }
        //check if profit for the current day - lowest if it's higher than current profit
        if(arr[i]-lowest > max){
            //reassign profit
            max = arr[i] - lowest
        }
    }
    //return profit
    return max;
}


console.log(best([15, 10, 20, 22, 1, 9]))
//12

console.log(best([1, 2, 3, 4, 5]))
// 4 - buy at $1, sell at $5

console.log(best([2, 3, 10, 6, 1, 4,8, 1]))
// 8 - buy at $2, sell at $10

console.log(best([7, 9, 5, 6, 3, 2]))
// 2 - buy at $7, sell at $9

console.log(best([0, 100]))
// 100 - buy at $0, sell at $100

console.log(best([5, 4 , 3, 2, 1]))
// 0

console.log(best([100]))
// 0

console.log(best([100, 0]))
// 0
