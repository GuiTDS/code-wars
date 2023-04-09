function solution(str){
   let splitedString = str.match(/.{1,2}/g) ?? [];
   splitedString.forEach((pair, i) => {
    if(pair.length === 1) {
        pair += '_';
        splitedString[i] = pair;
    }
   })
   return splitedString;
}

const frase = 'g';
let result = solution(frase);
console.log(result);
