let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;

// ! 1 - Aritmetik Operatörler
/* +, -, /, *, %, ++, -- */

result = number1 + number2;
result = number1 - number2;
result = number1 / number2;
result = number1 * number2;
result = number1 % number2;
// result = number1 % 3;
// result = ++number1;



// ! 2 - Atama Operatörleri
// ? =, +=, -=, /=, *=, %=
result = number1;
// result = result + number2;
result += number2;
result -= number2;
result /= number2;
result *= number2;
result %= number2;


// ! 3 - Karşılaştırma Operatörleri
// ? ==, !=, ===, >, <, >=, <=
result = number1 == number2;
result = number1 != number2;
result = 10 === "10"; /* değer + tip kontrolü */

result = number2 > number3;
result = number2 < number3;
result = number2 >= number3;
result = number2 <= number3;
// console.log(result);
// ! 4 - Mantıksal Operatörler
// ? &&: ve, ||: veya, !: tersi


// && ve iki şartta da true döndürmeli

// console.log(number1 !== number2 && number1 < number2);

// || veya: bir true döndürse bile true alır

// console.log(number1 > number3 || number1 !== number1);

/* ! tersi, değili */
console.log(!(number1 > number3) && number2 >= number1); 

