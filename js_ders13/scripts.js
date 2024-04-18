let tarih = new Date();

let result;

result = tarih.getDate(); //! gün
result = tarih.getDay(); //! 0 = pazar, sali = 2
result = tarih.getFullYear();//! yıl
result = tarih.getHours();//! saat
result = tarih.getTime();// ! milisaniye cinsinden saat bilgisi


// ! Tarihi güncelleme methotları - Set Methods
// tarih.setFullYear(2025);
tarih.setMonth(3);
tarih.setDate(15);
result = tarih;
let dogumTarihi = new Date(1998, 9, 14);

result = tarih.getFullYear() - dogumTarihi.getFullYear();


console.log(result);
