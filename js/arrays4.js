// Написать функцию, которая принимает массив 
// любых целых чисел, и возвращает новый массив
// из элементов переданного массива, кратных
// пяти. ([1,2,5,12,15,21] вернет [5,15]) (filter)

let n = Math.round(Math.random() * 5 + 1);
let arr =  new Array();
for(let i = 0; i < n; i ++ ){
    arr[i] = Math.round(Math.random() * 100);
}
console.log ( arr );
console.log ( ' => ' );
let checkFive = arr.filter(i => i%5 == 0);
console.log( checkFive );