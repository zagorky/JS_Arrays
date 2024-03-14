// Написать функцию, которая принимает массив 
// чисел и возвращает среднее арифметическое, 
// (округлить результат до десятых). 
// (reduce для суммы)

let n = Math.round(Math.random()*3+1);
let arr =  new Array();
for(let i=0; i<n; i++){
    arr[i] = ((Math.round(Math.random()*100) * 10) / 100);
}
let checkMiddle = ( arr.reduce((sum, i) => sum + i) / arr.length).toFixed(1) ;
console.log(arr);
console.log (' => ');
console.log (checkMiddle);