// Дан массив со строками. Оставьте в этом 
// массиве только те строки, которые начинаются 
// на http://.(filter,startsWith)
// Используйте возможности объекта Object 
// (.keys, .values,.entries)

// function findData (arr){
    //    return arr.filter((elem) => elem == 'http://')
    // return elem.startsWith('http://');
    // }

let data = {
    link : 'https://www.youtube.com/' ,
    name : 'YouTube',
    discription : 'video hosting',
};
let arrData = Object.values(data);


// let thisData = '0';
// let arrData = Object.values(data);

// let res = findData(arrData );
console.log(data);
console.log(arrData);
console.log();
