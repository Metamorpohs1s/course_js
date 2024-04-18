const ad = "Bilge";
const soyAd = "Kılıç";
const yas = 25;
const sehir = "İstanbul";
const meslek = "Full-Stack Developer";

const bio = "benim adim: " + ad + " " + "Soyadim: " + soyAd + " "

+ "Şehir: " + sehir + " Meslek: " + meslek + " " + "Yaş:" + yas;
// ! - backtick
const newBio = `Benim adım ${ad} ${soyAd} ${sehir}'da yaşıyorum. ${yas} yaşındayım ve ${meslek} olarak çalışmaktayım.`;


console.log(newBio);