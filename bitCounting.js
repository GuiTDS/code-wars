var countBits = function(n) {
    let binary = n.toString(2);
    let occ = (binary.match(/1/g) || []).length;
    return occ;
};

var countBits2 = n => n.toString(2).split('0').join('').length; // better solution

let result = countBits(1234);