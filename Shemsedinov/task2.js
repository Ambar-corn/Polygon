/**
 * Теперь давайте сделаем функцию, которая вычислит сумму всей покупки. 
 * Дайте функции понятное название и добавьте такие правила: нужно проверять, 
 * является ли цена числом (при помощи typeof), суммируем только положительные цены, 
 * а если находим не число или отрицательное число, то выдаем ошибку при помощи throw.

В ходе выполнения задания, поищите в интернете документацию по for..of, throw, 
console.log, функциям и массивам. Лучше всего искать в MDN (mozilla developers network).

Добейтесь, чтобы код запускался в командной строке через node.js или в браузере.
 */

const items = [
  { price: 40 },
  { price: 120 },
  { price: "505" },
  { price: 3520 },
];
const calculateTotal = (goods) => {
  let total = 0;

  for (let { price } of goods) {
    if (typeof price !== "number") continue;
    if (price > 0) {
      total += price;
    }
  }
  return total;
};

console.log(`Истинный результат = ${calculateTotal(items)}`);
