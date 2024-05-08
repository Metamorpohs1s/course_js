// ! -- Asenkron programlama
/* console.log("islem 1");
setTimeout(()=>{
    console.log("islem 12");
}, 2999) // son işlem olarak onceden yazdırılandan sonra yazar

console.log("islem 123");
console.log("islem 1234");
 */
//! -- CallBack Fonksiyonu

/* function sayHello(name, callback){
    
    callback();
    console.log(`hello ${name}`);
   
    
   
};
function goodBye(){
    console.log("gorusmek uzere"); 
};
sayHello("Asim", goodBye);
 */

// ! -- aJAX VE HTTP İSTEKLERİ
/* let lili;
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users" );

xhr.onload = function(){
    const response = xhr.responseText;
    // console.log(JSON.parse(response)[0]);
    if(xhr.status ===201){

        // lili = JSON.parse(response);
        console.log(JSON.parse(response));
    }else{
        console.log("Are you sure nigga? = " + xhr.status);
    }
};
xhr.send();

console.log(lili);
 */
// ! promise

/* 
 function getRandomNumber(){
    return new Promise ((resolve, reject)=>{
        setTimeout(() => {
        let number = Math.floor(Math.random()*100)
        if(number % 2 === 0 ){
           resolve(number);
        }else{
            reject(`rejected: ${number} hata tek sayi `);
        }
    }, 1500); 
    });
 };
 getRandomNumber().then((number) => console.log("resolve " + number ))
 .catch((error) => console.log(error)); */

//! fetch
/* 
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((response) => response.json())
 .then((data)=> console.log(data))
 .catch((error) => console.log(error)); */


/* const response = fetch("https://jsonplaceholder.typicode.com/users");
console.log(
    response
    .then((response)=>response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
); */

// ! -- async & await

/* async function getData(){
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);
} */

const getData = async () => {
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.log(error);
}
};



getData();