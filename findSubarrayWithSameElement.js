function findSubArrayWithSameElement(a, k) {
    //coding and coding..
    if(!a.includes(k))
        return (-1, -1);

    let start = 0, end = 0;
    let max = 0, count = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] === k) {
            count++;
        } else {
            count = 0;
        }
        if(count >= max) {
            max = count;
            end = i;
            start = end - (count - 1);
        }
    }
    return [start, end];
  }

let result = findSubArrayWithSameElement([2,1,1,2,1,1,1], 1);
console.log(result);