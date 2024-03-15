// Дан некоторый массив. Поделите сумму 
// элементов, стоящих на четных позициях, на 
// сумму элементов, стоящих на нечетных позициях.
// Считайте что первая позиция четная (номер 
// индекса 0), массив должен заполняться 
// случайными числами и содержать четное число 
// элементов. (reduce 2 шт)

let n = Math.round(Math.random()*5+1);
let arr =  new Array();
for(let i=0; i<n; i++){
    arr[i] = (Math.round(Math.random()*100)) ;
}
let arrEven = arr.reduce((sum, elem, i) => {
 if ( i%2 == 0) sum += elem;
 return sum;
}, 0);
let arrOdd = arr.reduce((sum, elem, i) => {
    if ( i%2 !== 0) sum += elem;
    return sum;
}, 0);

    document.write(arr);
    document.write( ' => ' );
    document.write((arrEven / arrOdd).toFixed(1));

     