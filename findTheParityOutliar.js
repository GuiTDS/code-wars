function findOutlier(integers){
    let even = integers.filter(element => element % 2 == 0);
    let odd = integers.filter(element => element % 2 !== 0);
    return even.length > 1 ? odd[0] : even[0];

}

let test = [82011266,-159633775,34082568,-162218974,38300184,75326118,-10705646,-31343096,95443282];

let result = findOutlier(test);

console.log(result);