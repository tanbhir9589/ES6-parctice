// akta object ar onk gula proparty thaka oi khan thaka 2 ba 1 property amer read korta chai .
//normal object
const person = { name:'jack',adrress:'dhaka',ages:'19',phone :'015462558',gfname:'mst x',job:'nai'};
const{ name,ages,gfname}=person; // stranded process
console.log(name,ages,gfname);
// const name = person.name;  normal process
// console.log(name); 
// console.log(person.name);

//complex object 
const Boss = {
    name : 'jonkar',
    info :{
        home :"usa",
        learder : "web developer"
    }
}

const{ home} =Boss.info;
console.log(home);


// array system
const fnd =['pappu','sakib','omi','nahid'];
const [fnd2,...otherfnd]=fnd;  // ai kahan ...otherfnd dia amer fnd2 arry list frist index ka bujache oi khana 
                               //ja fnd ta ascha ok bad dia sobai ka print koa diba .
console.log(otherfnd);
console.log(fnd2);