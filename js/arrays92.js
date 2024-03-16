"use strict"
// Дан массив со строками. Оставьте в этом 
// массиве только те строки, которые начинаются 
// на http://.(filter,startsWith)
// Используйте возможности объекта Object 
// (.keys, .values,.entries)


let data = {
    link : 'https://www.youtube.com/' ,
    name : 'YouTube',
    discription : 'video hosting',
};
let arrData = Object.values(data);
let filterValue = arrData.filter(function(el){
return el.startsWith('https:')
});
    
console.log(data);
console.log(arrData);
console.log(filterValue);