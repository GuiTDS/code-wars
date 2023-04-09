function toCamelCase(str){
    if(str === "") {
        return "";
    }
    let strSplit = str.split(/-|_/);
    let result = strSplit[0].charAt(0).toLowerCase() + strSplit[0].slice(1);
    for(let i = 1; i < strSplit.length; i++) {
        result += strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
    }
    console.log('resposta final:', result);
    return result; 
} 

let test = toCamelCase('essa-Eh-uma-variavel-sem-camel');