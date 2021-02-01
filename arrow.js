// function doubleIt(number){
//     return number*2;
// }

// const doubleIt=function(number){
//     return number*2;
// }

const doubleIt=number=> number*2;
const add=(x,y)=>x+y;

const result=doubleIt(5);
console.log(result);

const result1=add(50,70);
console.log(result1);

const give5=()=>5;
const result2=give5();
console.log(result2);

const doMath=(x,y)=>{
    const sum=x+y;
    const difference=x-y;
    const result=sum*difference;
    return result;
}

const result3=doMath(80,50);
console.log(result3);



