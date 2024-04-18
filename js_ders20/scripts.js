// ! fonsksiyonlar kendi scope alanlarını oluşturabilirler
// ! Var ile if block içerisinde oluşturulmaz
// ! let ve const ile block içi scop oluşumu sağlayabilir

var kullanici = "Global Scope : Emin";

function isimYazir(){
var kullanici = "Function Scope : Nur";
console.log(kullanici);
};
// function isimYazir2(){
    
    // console.log(kullanici);
    // };

if(true){
    let kullanici = "if scope : Yasin";
    console.log(kullanici);
}

console.log(kullanici);
isimYazir();
// isimYazir2();