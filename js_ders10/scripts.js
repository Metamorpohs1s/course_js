let url = "https://www.bilgisayargenetigi.com";
let youtube = "Bilgisayar Genetiği";
let result;

// ! 1 - Karakter sayısı bulma iki değişkeninde

result = url.length;

result = youtube.length;

result = youtube.replace(" ", "").length;

// ! 2 - Youtube değişkeni kaç karakterden oluşuyor

result = youtube.split(" ").length;
result = url.split(".").length;


// ! 3 - Kanal adı Başlangıç kontrol

result = youtube.startsWith("Bilgisayar");
result = url.startsWith("https");
/*if (result){
    console.log("yapilacaklar");
}else{
    console.log("false döndü");
}*/

// ! 4 - Kelime kontrolü
if(youtube.indexOf("rGenetiği") > -1){
    console.log("calişti");
}else{
    console.log("calişmadi");
};

// ! 5 - Url ve Youtube Değişken birleştir

youtube = youtube.toLowerCase().replace(" ", "-");
/*url = url.replace("com", "com/");*/

let newUrl = url.replace(url, url + youtube);
newUrl = `${url}/${youtube}`;
console.log(newUrl);
