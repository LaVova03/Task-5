const question = +prompt('Яку довжину массиву Ви хочете задати? Введіть число.');
question ? true : alert('Помилка');
let long;
let arr = [];
for (let i = 1; i <= question; i++) {
    if (question) {
        long = prompt('Введіть значення');
        if (long === '') {
            arr.push('');
        } else if (long) {
            arr.push(long);
        } else if (long == null) {
            alert('Помилка');
            break;
        };
        console.log(arr);
    };
};


let numbers = [];
let strings = [];
arr.forEach(e => (isNaN(e) ? strings : numbers).push(e));
numbers = numbers.sort((a, b) => Number(a) - Number(b));
strings = strings.sort();
arr = numbers.concat(strings);
console.log(arr);


arr.splice(2, 3);
console.log(arr);