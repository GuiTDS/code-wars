function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  }

let result = openOrSenior( [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]);
console.log(result);