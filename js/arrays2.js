let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let arrSum = arr.filter( i => (i <  10 && i > 0)).reduce((sum, i) => sum + i, 0);
console.log(arr);
console.log(arrSum);
