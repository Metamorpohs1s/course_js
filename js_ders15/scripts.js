let products = ["iphone5", "samsung", "huawei"];
let result;
result = products.length;

result = products.toString();//string'e çevir

result = products.join(" ");// string'çevir ve virgül vs cıkar

//! diziden eleman silme

// result = products.shift(); // ilk elemanı siler geri döndürür

// result = products.pop(); // son elemanı siler geri döndürür

// diziye eleman ekleme
// result = products.push("xiaomi"); // dizi sonuna eleman ekler

// result = products.unshift("xiaomi"); // dizi eleman başına ekler 

// dizi birleştirme

let urunler1 = ["asus", "apple"];
let urunler2 = ["dell", "casper"];
let urunler3 = ["monster", "lenovo"];

// result = urunler1.concat(urunler2, urunler3);

// result = urunler1.splice(0, 0, urunler2);
// result = urunler1.splice(0, 0, "elma");
result = urunler1.splice(0, 1);

console.log(result);
console.log(urunler1);