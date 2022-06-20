// class dia akta ojbject thaka ar akta object ki vaba read kora jai 
class Preant {
    constructor(){
        this.FatherName = 'MD X';
    }
}


class Child extends Preant{   // extenda hola preant class ar object ta ka accuess kora janno ar sata ar ..
    //akta kaj korta hoba super() dita hoba .

    constructor (name){
        super();
        this.Name = name;

    }
     getFullName () { // function ai vaba used kora jaba .
         return this.Name+ " " +this.FatherName ;
            }

    }

const baby = new Child('tom');
const baby2 =  new Child("Jerry");
console.log(baby);
console.log(baby.getFullName());
console.log(baby2.getFullName());