// Дан объект с ключами и значениями. 
// Запишите в первый массив ключи объекта, 
// а во второй - значения.
// Найдите сумму элементов этой структуры.

let data = [
    {
    1: 11,
    2: 12,
    3: 13,
    },
    {
    1: 21,
    2: 22,
    3: 23,
    },
    {
    1: 24,
    2: 25,
    3: 26,
    },
    ];
let keys = data.reduce((cont,obj) => [...cont, ...Object.keys(obj)], [])

document.write(keys);
let values = data.reduce((cont, obj) => [...cont, ...Object.values(obj)], [] )
document.write(values);
let sum = keys.reduce((sum,i) => sum + +i, 0) + values.reduce((sum,i) => sum + +i, 0);
document.write('=>');
document.write(sum);
