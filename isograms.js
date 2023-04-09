function isIsogram(str){
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++) {
        let letra = str[i];
        if(str.split(letra).length - 1 > 1) {
            return false;
        }
    }
    return true;
}

//better solution
function isIsogram2(str){
	return new Set(str.toUpperCase()).size == str.length;
}