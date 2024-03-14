// Написать функцию, которая принимает массив 
// чисел и переносит первый элемент массива в 
// конец. (shift, push)

let n = Math.round(Math.random()*5+1);
let arr =  new Array();
for(let i=0; i<n; i++){
    arr[i] = (Math.round(Math.random()*100)) ;
} 
function arrShiftPush(arr){
   arr.push(arr[0]);
   arr.shift();
   return arr;
}

document.write(arr);
document.write( ' => ' );
document.write(arrShiftPush(arr));



