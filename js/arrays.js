// 1
// Вычислить сумму квадратных корней для всех чётных
//  чисел целочисленного массива. (reduce)

let n = Math.round(Math.random()*5+1);
let arr =  new Array();
for(let i=0; i<n; i++){
    arr[i] = Math.round(Math.random()*100);
}
document.write(arr);
let sumSqrt = arr.filter(i => i % 2==0).reduce ( (sum,i) => sum + (i ** 0.5) , 0);
document.write('=>');
document.write(sumSqrt);
