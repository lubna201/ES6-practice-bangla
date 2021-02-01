// function add(number1,number2){
//     // if(number2==undefined){
//     //     number2=0;
//     // }
    
//     number2=number2 || 0;
//     return number1+number2;
// }

function add(number1,number2=0){ //default parameter

    return number1+number2;
}

const total=add(15,17);
// const total=add(15);
console.log(total);