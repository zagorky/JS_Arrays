// Запросите у пользователя число и сформируйте 
// на его основе другое число, каждая цифра 
// которого больше на единицу. Если попалась 
// цифра 9 она также заменяется на 10. 
// (split, map)

let num = prompt('Введите ЧИСЛО');
if (Boolean(num)){
let arrNum = num.split('');
let res = arrNum.map(item => +item+1);
document.write(res);}
else alert('ОШИБКА')
