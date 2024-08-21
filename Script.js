console.log("hello world");
document.write("Hello world,Welcome to Papa's world. ");
document.write(5+2);

let a=6;
let b=16;

//while using let thee is some limitation
//we cannot use the variable outside a simple block

document.write("the value of a+b is",a+b);

var d=16;
var e=16;
var f=d+e;
document.write("the value of f is", f);

var bikename;
bikename="her0";
document.write(bikename);

bikename="Tvs";
document.write(bikename);
 //let will not allow to declare

 const x=8,y=7;
 const z=x+y;
 document.write(z);

 //primitive data(numbers ,strings ,boolean) type are stored in stack whereas
 //non primitve data types(array, object) are stored in heap
 
 var p;//undefined data type
 var num=null;//

 document.write(typeof(p));
 document.write(typeof(num));//will give result "object"

 //type conversion
 //java script is a loosely type programing language i.e it doesnot need to specify data type

 document.write(12+5+"helo world"+12+6);
//12 and 6 is considered as string

 //any key word declared without var keyword is a global variable