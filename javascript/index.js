console.log("hello ")
var myName = "tushar"
console.log(myName);
var a =10
var b =20
console.log(a!=b);

var year = 2021;
if((year%4==0 ) && (!(year%100==0))){
    console.log('leap year');
}else{
    console.log('not leap year');
}


for(let i =1; i<=10; i++){
    var tableof  =8
    console.log(`${tableof} * ${i} = ${tableof * i}`);
    
}

function sum(a,b){
    c = a+b
    return c;
}
d =sum(5,7)
console.log(d);
var myfrnd = ['tushar','ashish','dhirendra','aman'];

console.log(myfrnd.lastIndexOf('tushar'));
let mydate = new Date().toString()
console.log(mydate);