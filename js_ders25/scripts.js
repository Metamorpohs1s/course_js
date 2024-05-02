// ! -- Modern Javascript Arrow
// method 1

const sayHello = () => {
    console.log("hello");
};

sayHello();

// method 2
const sayHello2 = () => console.log("hello2");

sayHello2();

// old method 

const sayHello3 = function () {
    console.log("hello3");
};

sayHello3();

// function paramaters old
const sayHelloParamOld = function (name) {
    console.log(`Hello, ${name}`);
};

sayHelloParamOld("emine");

// function paramaters new
const sayHelloParam = (name) => console.log(`Hello, ${name}`);

sayHelloParam("emin");

//! array methods
// her bir sayinin karesi alindi
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(x => x * x);
console.log(squares);

// filter belirli kritere uyan elemani secer

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers1 = numbers1.filter(x => x % 2 === 0);
console.log(evenNumbers1); // [2, 4, 6, 8, 10]

// reduce toplama islemi icin

const numberSum = [1, 2, 3, 4, 5];

const sum = numberSum.reduce((acc, x) => acc + x, 0);
console.log(sum);


// find() array icindeki ilk kritere uyan eleman

const numbersFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const firstEvenNumber = numbersFind.find((x) => x % 2 === 1);
console.log(firstEvenNumber);

// some() dizi icindeki elemanlarin belirli bir kritere uyup uymadiği kontroll edilir

const numberSome = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const someNumber = numberSome.some((x) => x > 10);
console.log(someNumber);

// every() bu method dizi içindeki tüm elemanlarin belirli bir kritere uyup uymadiğini kontrol eder

const everyNumber = [2, 4, 6, 8, 10];
const numberEvery = everyNumber.every((x) => x % 3 === 1);
console.log(numberEvery);


// spread yeni ereyi eklemek icin bir kisa yol

const numbersConcat = [1, 2, 3];
const numbersConcat2 = [...numbersConcat, 11, 22, 33];

console.log(numbersConcat2);
// spread metodu ile eklenen sayilarin toplam değerini eklendikten sonra yazdirir toplam değer eleman sayisi cinsinden
const numbersConcat3 = [1, 2, 3];
const add = (x, y, z) => x + y + z;
console.log(add(...numbersConcat3)); // 6
// spread key-value pair'larinin başka bir objede kopyalanmasini saglar
const obj1 = {
    name: "Semra",
    age: "31"
};
const obj2 = {
    ...obj1,
    job: "insan kaynaklari"
};
console.log(obj2);

//Spread operator ile bir objectin içindeki key-value pair'larının başka bir object içine kopyalanmasını sağlar

const obj1Single = {
    name: "Jomanji",
    age: "31"
};
const obj2Double = {
    name: "David IKE",
    job: "Never Found Real Job",
    ...obj1Single
};
console.log(obj2Double);

/* const trgObj = {name:"abuzer", age:"31", job:"deveoper"};
const {name, age} = trgObj;
const newObj = {name , age, location:"Konya"};
console.log(newObj); */


// Destructuring obje ve dizilerdeki verilerin çekilmesi ve kullanilmasi icin kullanisli bir arac

const ojbJhamza = {
    name: " Japon Hamza",
    age: 30
};

/* const {
    name,
    age
} = ojbJhamza;
console.log(name);
console.log(age, ...name);

const ojbJhamza2 = {
    name: " Hamza Japp",
    age: 34
};

const {
    name: firstName
} = ojbJhamza2;
console.log(firstName); */
// rest destructuring obje ve dizi icindeki verilerin cekilmesini kolaylastirir
const restNumbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = restNumbers;

console.log(first);
console.log(second);
console.log(...rest); // rest dizi icinde verir,, ...rest ise direk sayilari eheee

// name age key value pairlerini destructuring ile cikarilmasi obj icindeki verilerin cekilmesini kolaylastirir

const objDestruct = {
    name: "Velat",
    age: 31,
    job: "Homeless"
};

const {
    name,
    age
} = objDestruct;

const newObj22 = {
    name,
    age,
    location: "new sehir",
    ...objDestruct
};
console.log(newObj22);

// map js de map yapisi ozellikle veri saklanmmasi ve erisimi icin kullanisli bir yapi, kay-value pairlerini saklar ve paileri hizli bir sekilde erisime acar

const map = new Map();

map.set("name", "abubakar");
map.set("age", 22);
map.set("job", "noneci");
/* console.log(map.get("name"));
map.delete("job");
console.log(map); */

map.forEach((value, key) => console.log(`${key}: ${value}`)); // değerleri karsilarindaki değerleri ile sirali yazdi


// sets

    const set = new Set();
    set.add(2);
    set.add(1);
    set.add(6);
    console.log(set.has(1));
    set.delete(2);
    console.log(set);
    set.forEach(value => console.log((value)));