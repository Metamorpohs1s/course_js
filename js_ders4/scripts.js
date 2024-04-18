/*
    Öğrenci bilgileri 

    1- Mert Demir

        Doğum Tarihi: 2001
        Bilgisayar Notları : 100, 90, 10

    2- Eylül Demir
        
        Doğum Tarihi: 2002
        Bilgisayar Notları: 60, 30, 50


    Geçer Not : 45

    Program Şartları:

    1- Öğrencilerin yaş ortalamasını hesaplayınız.
    2- Öğrencilerin ders not ortalamasını hesaplayınız.
    3- Öğrencilerin dersten kalıp kalmadığını hesaplayınız.
    
*/
const ogrList = {
    name: "Mert",
    lastName: "Demir",
    age: 2001,
    note: [100, 90, 10],
    name2: "Eylül",
    lastName2: "Demir",
    age2: 2002,
    note2: [30, 30, 50],
}
const name1age = new Date().getFullYear() - ogrList.age;
const name2age = new Date().getFullYear() - ogrList.age2;
const averageNote = 45;
let note1 = ogrList.note.reduce(function (a, b) {
    return ortalama = (a + b / 3);
}, 0, );
let newNote1 = parseInt(note1);
let note2 = ogrList.note2.reduce(function (a, b) {
    return ortalama = (a + b / 3);
}, 0);
let newNote2 = parseInt(note2);
let ogrenciOrtalamaYas = parseInt((name1age + name2age) / 2);
let ogrenciOtralamaNot = parseInt((newNote1 + newNote2) / 2);
console.log("Yas ortalaması:" + " " + ogrenciOrtalamaYas);
console.log("Sınıf not ortalaması:" + " " + ogrenciOtralamaNot);
if (newNote1 >= averageNote) {
    console.log("Öğrenci 1 Geçti");
} else {
    console.log("Kaldı 1 Kaldı");
};
if (newNote2 >= averageNote) {
    console.log("Öğrenci 2 Geçti");
} else {
    console.log("Kaldı 2 Kaldı");
};