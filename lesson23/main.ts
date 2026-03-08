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
let firstName: string | number = "David";
console.log(firstName);

firstName = 123;

// щоб запустити файл треба - tsc, а потім node main.js
console.log(firstName);

// якщо ми хочемо будь-який тип даних, то можна використовувати тип any
let firstName2: any = "David";
console.log(firstName2);
firstName2 = 123;
console.log(firstName2);

// з масивом, також тип повинний бути строгим, якщо не вказано інше
let names = ["David", "John", "Alice"];
names.push(5); // помилка, бо 5 не є рядком

// щоб не було помилки то робимо sytring | number
let names2: (string | number)[] = ["David", "John", "Alice"];
names2.push(5); // тепер це працює, бо 5 може бути рядком або числом

//
function calculateSum(num1: number, num2: number){
    return num1 + num2;
}
calculateSum(5, 10);
//calculateSum("5", "10"); // це працює, бо аргументи повинні бути числами, а не рядками
// calculateSum(5, 10, 20); // помилка, бо функція приймає тільки 2 аргументи, а не 3

// після :number - вказуємо тип даних, який ми очікуємо отримати від функції
function calculateSum3(num1: number, num2: number) : number {
    return num1 + num2;
    // return "Hello"; // помилка, бо функція повинна повертати число, а не рядок
}
// :void - це тип, який вказує, що функція не повертає значення
function printMessage(message: string) : void {
    console.log(message);
    // return "Hello"; // помилка, бо функція не повинна повертати значення
}


// num2? 
function calculateSum2(num1: number, num2?: number){
    return num1 + num2;
}
calculateSum2(5); // це працює, бо num2 є необов'язковим параметром
calculateSum2(5, 10); // це також працює, бо num2 є необов'язковим параметром
calculateSum2(5, 10, 20); // помилка, бо функція приймає тільки 2 аргументи, а не 3

type User = {
    name: string;
    age?: number;
    street: number | string;
}

let user1: User = {
    name: "David",
    street: "Main Street",
    // age: 25 - це не обов'язкове поле, тому його можна не вказувати
}

let user2: User = {
    name: "John",
    age: 30,
    street: 123
}

let user3: User = {
    name: "Alice",
    //age: '28', помилка, бо age повинен бути числом, а не рядком
    street: "Second Street"
}

// interface створюється зазвичай для опису обєктів
interface User2 {
    id: number;
    email: string;
    isAdmin: boolean;
}

let admin: User2 = {
    id: 1,
    email: "admin@example.com",
    isAdmin: true
}

// для запуску playwright тестів  - npx playwright test
// npx playwright test --headed - для запуску тестів з відкриттям браузера
// npx playwright test --ui - для запуску тестів з відкриттям UI
