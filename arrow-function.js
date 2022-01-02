// single parameter 

// function doubleIt(num) {
//     return num * 2;
// }
const doubleIt = num => num*2 ;
const result = doubleIt(5);
console.log(result);
//more then one parameter--
const numSum = (x,y) => x+y;
const result2 = numSum(10,10);
console.log(result2);
// under function many work
const doMath = (p,q) =>{
    const sum = p+q;
    const diff = p-q;
    const total = sum*diff;
    return total;
}
const result3 = doMath(7,5);
console.log(result3);
// no parameter ---
const give5 = ()=> 5;
const result4 = give5();
console.log(result4);