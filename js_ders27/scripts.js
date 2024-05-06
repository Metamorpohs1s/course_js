// ! -- Asenkron programlama
/* console.log("islem 1");
setTimeout(()=>{
    console.log("islem 12");
}, 2999) // son işlem olarak onceden yazdırılandan sonra yazar

console.log("islem 123");
console.log("islem 1234");
 */
//! -- CallBack Fonksiyonu

function sayHello(name, callback){
    callback();
    
    console.log(`hello ${name}`);
    
   
}
function goodBye(){
    console.log("gorusmek uzere");
}
sayHello("Asım", goodBye);

