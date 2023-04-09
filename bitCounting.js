var countBits = function(n) {
    let binary = n.toString(2);
    console.log(binary);
    let occ = (binary.match(/1/g) || []).length;
    console.log(occ);
};

var countBits2 = n => n.toString(2).split('0').join('').length; // better solution

countBits(1234);