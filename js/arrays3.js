// Написать функцию, которая принимает массив
// любых целых чисел и возвращает истину, 
// если все элементы четные. Если имеется хотя
//  бы один элемент не четный, то false. (every)

let n = Math.round(Math.random()*5+1);
let arr =  new Array();
for(let i=0; i<n; i++){
    arr[i] = Math.round(Math.random()*100);
}
function checkEvenNum (elem, i, arr){
    return elem%2==0;
}
let evenNum = arr.every(checkEvenNum);
document.write(arr);
document.write( ' => ' );

document.write(evenNum);
