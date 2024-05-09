// ! asenkron js

/* console.log("scam 1");
console.log("scam 5");
setTimeout(function(){
    console.log("scam 5");

}, 3100)
console.log("scam 3");
console.log("scam 2"); */

// ! callback fonsction
/* 
function sayHello(callback){
    setTimeout(function(){
        console.log("hello 1");

    },2999)
    callback();
}
function sayHello2(){
    console.log("hello 2");
}
sayHello(sayHello2); */

// ! callback hell
/* 
function userList(){
    console.log("kullanici listesi");
}
function pruductList(){
    console.log("urun listesi");
}
function priceList(){
    console.log("fiyat listesi");
}

function dataList(waitTime, callback){
    setTimeout(function(){
    callback();
    },waitTime * 1000)
}
dataList(.5, function(){
    userList();
    dataList(1, function(){
        pruductList(
            dataList(2, function(){
                priceList();
            })
        )
    })
}); */

// ! js promise

function userList(){
    console.log("kullanici listesi");
}
function pruductList(){
    console.log("urun listesi");
}
function priceList(){
    console.log("fiyat listesi");
}


/* function myPromise(waitTime, callback){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(callback){
                resolve(callback())
            }else{
                reject()
            }
            },waitTime * 1000)
      
    });
}

myPromise(1, userList)
.then(()=> myPromise(2, pruductList))
.then(()=> myPromise(2, priceList))
 */

//! async/await


/* function dataList(waitTime, callback){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            if(callback){
                resolve(callback())
            }else{
                reject()
            }
            },waitTime * 1000)
      
    });
}

async function executeDataList(){
    try {
       await dataList(1, userList)
        dataList(1, priceList)
       await dataList(1, priceList)
    } catch (error) {
            console.log(error);
    }finally{
        console.log("islem tamamlandi");
    }
}

executeDataList(); */


// ! xhr ajax ile veri alma
/* const xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/users" )
xhr.onload = function(){
    if(xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        myFunction(data);
    }
}
xhr.send();

function myFunction(userList){
    const data = userList.map((user) => user.name);
    console.log(data);
} */

//! fecth ile veri cekme
/* 
function getUsersData(){
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then((response)=> response.json())
    .then((data) => console.log(data));
}

getUsersData() */

// ! async Await veri cekme

async function getUserData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }finally{

        console.log("islem tamamlandi");
    }
}
getUserData()