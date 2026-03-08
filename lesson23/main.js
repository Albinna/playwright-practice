// щоб встановити typescript запускаємо в терміналі команду npm install -g typescript
// tsc --version показує версію TS якщо він встановився
// tsc main.ts компілює файл main.ts в main.js
// компіляція  - це процес перетворення коду з однієї мови програмування в іншу. 
// У випадку TypeScript, компіляція перетворює код TypeScript у JavaScript, який може виконуватися в браузері або на сервері. 
// Компілятор TypeScript перевіряє типи даних і синтаксис, а також генерує JavaScript-код, який є сумісним з різними середовищами виконання.
// створити файл ts.config.json для налаштування компіляції TypeScript
// це на JS
// const firstName1 = "David2";
// console.log(firstName1);
// це на TS
let firstName = "David";
console.log(firstName);
firstName = 123;
// щоб запустити файл треба - tscб а потім node main.js
console.log(firstName);
