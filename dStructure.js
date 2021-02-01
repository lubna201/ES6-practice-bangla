const person={name:'Jack William', age:17,job:'facebooker',gf:'ema waltson',address:'Kouchu khet',phone:'9050860',friends:['tom hanks','tom cruise','tom yearn']};

// const gfName=person.gf;
// console.log(gfName);

// const phone=person.phone;
// console.log(phone);

// const {phone}=person;
// console.log(phone);

// const {phone,gf}=person;
// console.log(phone,gf);

// const {phone,gf,salary,address}=person;
//  console.log(phone,gf,salary,address);

const friends=['sakin khan','arman khan','mir khan','salman','sarukkhan'];
const [first,next,...remaining]=friends;
console.log(first,next);
console.log(remaining);

const complexObject={
    name:'abc',
    info:{
        address:'kola bagan',
        leader:'tigher leader'
    }
}

const {leader}=complexObject.info;
