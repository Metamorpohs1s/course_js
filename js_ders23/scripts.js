// ! -- JavaScript'te ES5 versiyonunda sınıflar function ve prototype kullanarak tanımlanır. Constructor fonksiyonu, sınıfın tanımlandığı function içerisinde tanımlanır
/* let araba = {
    renk:"mavi",
    hiz: 0,
    hizlandir: function(){
        this.hiz += 10;
    }
};

araba.hizlandir();
console.log(araba.hiz); */



/* function Araba(renk){
    this.renk = renk;
    this.hiz = 0;
};

Araba.prototype.hizlandir = function(){
    this.hiz +=10;
};

let araba = new Araba("Black");
console.log(araba.renk);
console.log(araba.hiz); */

// ! -- JavaScript'te ES6 versiyonunda class yapısı kullanılarak oluşturulduğunda, constructor metodu ilk olarak çalışır. Constructor metodu, sınıf içerisinde nesnenin özelliklerinin tanımlanmasını sağlar.

/* class Araba {
    constructor(renk) {
        this.renk = renk;
    }
};

let araba = new Araba("siyah");
console.log(araba.renk);
 */


// ! -- Instantiation -- Classlar es6 ile gelen yapilardir. siniflar, nesneleri oluşturulmak için kullanilan şablonlar gibidir. araba sinifi içinde oluşturulan yeni yapilari yeni araba objemizde ekledik (özellik olarak).class Araba {
/*     constructor(renk, hiz) {
        this.renk = renk;
        this.hiz = hiz;
    }
    hizlandir() {
        this.hiz += 10;
    }
};

let araba = new Araba("pembe", 10);
console.log(araba.renk);
console.log(araba.hiz);
araba.hizlandir();
console.log(araba.hiz); */


// ! -- Kalıtım
/* 
class Araba {
    constructor(renk){
        this.renk = renk;
    }
}

class MotorluAraba extends Araba {
    constructor(renk, motor){
        super(renk);
        this.motor = motor;
    }
}
let araba = new MotorluAraba("Siyah", "V8");
console.log(araba.renk);
console.log(araba.motor); */

// ! -- EnCapsulation

/*     class Araba{
        #renk;
        constructor(renk){
            this.#renk = renk;
        }

        getRenk(){
            return this.#renk;
        }

        setRenk(renk){
            this.#renk = renk;
        }
        hizlandir(renk){
            this.hiz += 10;
        }
    };

    let araba = new Araba("siyah");

    console.log(araba.getRenk());
    araba.setRenk("kirmizi");
    console.log(araba.getRenk());
   
    */

// ! -- Polymorphism
/* 
    class Shape {
        draw() {
            console.log("Şekil çiziliyor.");
        }
    }

    class Circle extends Shape {
        draw(radius){
            console.log(`${radius} radiuslu bir daire çiziliyor.`);
        }
    }

    let shape = new Shape();
    let circle = new Circle();

    shape.draw();

    circle.draw(12); */
/* 
class Calculator {
    add(a, b) {
        return a + b;
    };
    add(a, b, c) {
        return a + b + c;
    };
};

let calculator = new Calculator();

console.log(calculator.add(1, 2));
console.log(calculator.add(1, 2, 3)); */

// ! -- Abstraction

class DateBase {
    constructor(data) {
        this._data = data;
    };

    getData() {
        return this._data;
    };

    setData(value) {
        this._data = value;
    };
};


class dataController  extends DateBase {
    constructor(data) {
        super(data);
    };
    getData() {
        return "Data: " + super.getData();

    };

};

let DataController = new dataController("Database Data");

console.log(DataController.getData());
