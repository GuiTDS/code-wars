/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

function solution(number){  
    if(number < 3)
        return 0;
    let sum = 0;
    for(let i = 3; i < number; i++) {
        if(i % 3 == 0 || i % 5 == 0) {
            console.log(i, 'eh multiplo de 3 ou 5');
            sum += i;
        }
    }
    return sum > 0 ? sum : 0;

}


let result = solution(10);
console.log(result);