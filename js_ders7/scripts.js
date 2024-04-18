let yas = 17;
let mezuniyet = "Üniversite";

if (yas >= 18 && (mezuniyet == "Lise" || mezuniyet == "Üniversite")) {
    console.log("Ehliyet şartlarını karşıladığın için ehliyet alabilirsin");

}else if(yas ===17){
    console.log("Dayan. Son 1 senen kaldı");
}

else {
    console.log("Ehliyet şartlarını karşılayamadığın için ehliyet alamazsın");
};