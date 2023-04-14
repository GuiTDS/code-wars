/* Complete the solution so that it returns true if the first argument(string)
 passed in ends with the 2nd argument (also a string).*/

function solution(str, ending){
    let strSlice = str.slice(str.length - ending.length, str.length);
    if(strSlice === ending)
        return true;
    return false;
}

let result = solution('guilherme', 'be');
console.log(result);