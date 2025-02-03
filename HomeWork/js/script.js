//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).

// let name = "Іван";
// let city = name;
// console.log(city);  // Іван

//***2***
// Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`);      // привіт 1
// console.log(`привіт ${"name"}`); // привіт name
// console.log(`привіт ${name}`);   // привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// console.log(typeof Number(a));   // number
// console.log(typeof Number(b));   // number
// console.log(typeof Number(c));   // number
// вивести в консоль тип

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
// console.log((0.1*10 + 0.2*10)/10);   // 0.3

//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));   // 50

//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random() * (4 - 2) + 2);   // випадкове число від 2 до 4

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);   // 19

//***8**
//вивести в консоль message  великими літерами
// console.log(message.toUpperCase());   // WELCOME TO BAHAMAS!

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let obj = {};
// obj.name = "Tetiana";
// obj.age = 55;
// obj.city = "Nizhyn";
// console.log(obj);        // {name: "Tetiana", age: 55, city: "Nizhyn"}
// delete obj.city;
// obj["like flowers"] = true;
// console.log(obj);        // {name: "Tetiana", age: 55, like flowers: true}

// //***10**
// // За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта

// for (let key in obj) {
//     console.log(key)    ;   // name Tetiana age 55 like flowers true
//     console.log(obj[key]);  
// }