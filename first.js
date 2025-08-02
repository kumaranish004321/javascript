/*const product = {
    title: "Ball Pen",
    rating: 5,
    offer: 10,
    price: 300,

};
 console.log(product);*/
 
 //Artimetic operators

//  let a = 5;
//  let b = 2;
//  console.log("a +b =", a+b);
//   console.log("a - b =", a-b);
//    console.log("a * b =", a*b);
//     console.log("a / b =", a/b);
//      console.log("a % b =", a%b);
//       console.log("a **b =", a**b);

// unary operator
// let a = 5;
//  let b = 2;
//  console.log("a =", a, "& b =",b);
//  a++;
//  console.log("a++=", ++a);
//  console.log("a=",a);
//Assigment operator

// let a = 5;
//  let b = 2;
//  a+=4; //a=a+4=9
//  console.log("a=",a);

 //comparisom operator
//  let a = 5;
//  let b = 2;

//  console.log("a <= b",a <= b)

//logical operators

// let a = 5;
//  let b = 2;
//  let cond1 =a>b;
//  let cond2 = a===b;

//  console.log("cond1 && cond2", cond1 && cond2);

// Conditional statement

// let age = 17;

// if(age>=18){
//     console.log("you can vote");
// }
// if(age<18) {
//     console.log("you CANNOT vote");
// }

//mode variable

// let mode = "dark";
// let color;

// if(mode==="dark"){
//     color= "black";
// }
// if(mode=== "light") {
//     color= "white";
// }
// console.log(color);

//if-else statement
// let mode = "light";
// let color;

// if(mode=== "dark"){
//     color ="black";
// }else{
//     color= "white";
// }
// console.log(color);

// else-if statement

// let mode = "silver";
// let color;
// if(mode==="dark"){
//     color= "black"
// }else if (mode==="blue"){
//     color = "blue";
// }else if (mode==="pink"){
//     color = "pink";
// }else{
//     color = "white";
// }

// console.log(color);


//Ternary Operators

// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);


//for in loop

// let student = {
//     name : "Anish kumar",
//     age : 23,
//     cgpa : 7.9,
//     ispass: true,

// };

// for(let key in student) {
//     console.log("key=", key, "value=",student[key])
// }


//* strings

// let obj = {
//     item: "pen",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");


//template literals
// let spacialString= `this is a template literal ${23+45}`;
// console.log( spacialString);

//str.replace

// let str = "hellololo";

// console.log(str.replace("lo", "p")); //and replaceAll


// let str = "IloveJS";

// console.log(str.charAt(4)); 

//ARRAY IN JS

// let marks = ["98","89","80","69"];
// console.log(marks);
// console.log(marks.length);
//  let name =["anish","ankit","kunal","kanhaiya"];
//  //for loop
// for(let i =0; i <name.length; i++) {
//     console.log(name[i]);
// }

// //for of

// for(let brothers of name){
//     console.log(name);
// }


// let cities=["bihar","patna","bhaglpur","munger"];
// for(let city of cities) {


// console.log(city.toUpperCase());
// }

// let foodItems = ["potato", "apple","litchi","tomato"];
// // let deleteItems = foodItems.pop();
// // console.log(foodItems);
// // console.log("delete", deleteItems);


// let marks = [89,67,89,78,35]
// console.log(foodItems);
// console.log(foodItems.toString)
// console.log(foodItems);


// let marverlHeroes = ["thor","spiderman","iornman"];
// let dcHeroes = ["superman","aquaman","batman"];
// let indianHeroes = ["krish","raka"]
// let heroes = marverlHeroes.concat(dcHeroes,indianHeroes);
// console.log(heroes);

// let marverlHeroes= ["thor","spiderman","iornman"];
// let val = marverlHeroes.shift();
// console.log("delete",val);

// let marverlHeroes= ["thor","spiderman","iornman","antman","Dr.strange","hulk"];
// console.log(marverlHeroes);

// console.log(marverlHeroes.slice(1, 2));


// let arr = [1,2,3,5,6,,7,9,8];
// arr.splice(1,2,100,400);

//add element

// arr.splice(2,0,1000);

//delete element

// arr.splice(1,1);


//Function in Js

// function myFunction() {
//     console.log("Anish kumar");
//     console.log("we are learning Js: )");
// }

// myFunction();

//Function -> 2 number, sum

// function sum(x,y) {
//     s = x + y;
//     console.log("before return");
//     return s;
//     console.log("after return");
// }

// let val = sum(3,5);
// console.log(val);

// 

//sum Function

// function sum(a, b) {
//     return a +b;

// }
//    const x = 5
//  const arrowSum=(a, b )=> {
//      console.log(a+b);
//  };

// //multiplication function
// function mul(a, b ) {
//     return a*b;
// }

// const arrowMul = (a,b)=>{
//     returna*b;
// };
// const printHello=()=>{
//     console.log("hello")
// };

//for Each
// let arr = [1,2,3,4,5,6];

// arr.forEach((val)=> {
//     console.log(val);
// });


//MAP

// let nums =[34,44,89,90];

// let newArr=nums.map((val) =>{
//    return val *2;
// });

// console.log(newArr);

// let calcsqare = (num) =>{
//     console.log(num*num);
// };

// let arr =[1,2,3,4,5,6,7,8,9];

// let evenArr=arr.filter((val) =>{
//     return val %2===0;
// });

// console.log(evenArr)


// const arr = [3,2,5,4];

// const output=arr.reduce((prev, curr) =>{
// return prev >curr ? prev:curr;
// });

// console.log(output);
// console.log("hello");
// alert("hello2");


// let button = document.getElementById("myId");
// console.dir(myId);



// let headings = document.getElementsByClassName("myClass");

// console.dir(headings);
// console.log(headings);

// let firstEl = document.querySelector("p");
// console.dir(firstEl);
 

// let div =document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

//---------Event in Js------

// let btn1= document.querySelector("#btn1");

// btn1.onclick = (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// ;    // console.log("btn1 was clicked");
//     // let a = 24;
//     // a++;
//     // console.log(a);
// }

// let div = document.querySelector("div");
// div.onmouseover = (evt)=>{
//       console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     // console.log("you are indide div");
// };

//______Event Listeners_____

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked--handler1");
// });
// const handler2 = ()=>{
//     console.log("button1 was clicked --handler2");
// };
// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked--handler3");
// });
// btn1.addEventListener("click", ()=>{
//     console.log("button1 was clicked--handler4");
// });

// btn1.removeEventListener("click",handler2);

// const student = {
//     fullName: "Anish kumar",
//     marks: 7.8,
//     printMarks: function () {
//         console.log("marks = ", this.marks);
//     },

// };

//____Prototype in js______
// const employee = {
//     calcTex () {
//         console.log("tex rate is 10%");
//     },
// };

// const anishRakesh ={
//     salary: 50000,
// };

// const anishSunny ={
//      salary: 60000,
//      calcTex() {
//         console.log("tex rate is 20%");
//      }
// };

// const baljeetSanny ={
//       salary: 30000,
// };

// const pintuSumit ={
//     salary: 35000,
// };

// anishRakesh.__proto__ = employee;
// anishSunny.__proto__ = employee;
// baljeetSanny.__proto__ = employee;
// pintuSumit.__proto__ = employee;


//--------classes in js----------

// class ToyotaCar {
//     constructor (brand, mileage) {
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }
//      stop() {
//         console.log("stop");
//     }

//     // setBrand(brand) {
//     //     this.brand = brand;
//     // }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// console.log(fortuner);
// // fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar("lexus", 12);
// console.log(lexus);
// // lexus.setBrand("lexus");

//----Inheritance in Js---


// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {
    
// }

// let obj = new Child();


// class Person {
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
//     work() {
//         console.log("do nothing");
//     }
// }
// class Engineer extends Person {
//     work() {
//         console.log("slove problem, buld something");
//     }
// }

// let anishObj = new Engineer();

//---Super keyword-----

// class Person {
//     constructor(name) {
        
//         this.species = "homo, sapiens";
//         this.name = name;
//     }
//      eat() {
//          console.log("eat");
//      }

//  }
//  class Engineer extends Person {
//     constructor(name) {
       
//         super(name); // to invoke parent class constructor
       
//     }
//      work() {
//         super.eat();
//          console.log("slove problem, buld something"); 
//      }
//  }

//  let engObj = new Engineer("anish");

//______Sync in js______

// console.log("one");
// console.log("two");
// console.log("three");


// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 2000);  //timeout ;
// console.log("three");
// console.log("four");

//-----Callbaacak-----


// function sum (a, b) {
//     console.log(a+b);
// }

// function calculator (a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 4, (a, b)=>{
//     console.log(a+b);
// });


// const hello = () =>{
//     console.log("hello");
// };

// setTimeout(hello, 3000);

//nesting

// let age = 19;
// if(age>=18) {
//     if(age>=60){
//   console.log("senior");

// }else{
//     console.log("middle");
// }
// }else{
//     console.log("child");
// }


//nested loop


// for(let i=0;i<5; i++) {
//     let str = "";
//     for(let j=0; j<5; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }



// function getData(dataId, ) {
//     return new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         console.log("data", dataId);
//         resolve("success");
//     }, 3000);
// });
// }

// //promise chain

// console.log("getting data.....");
// getData(1).then((res) =>{
//     // console.log(res);
//     console.log("getting data2.....");
//     return getData(2);
//         // console.log(res);
// })
// .then((res)=>{
//     console.log("getting data3.....");
//     return getData(3);
// })
// .then((res)=>{
//    console.log(res);
// });


//-------Callback Hell 
// getData(1, () =>{
//     console.log("getting data2.....");
//     getData(2, () =>{
//         console.log("getting data3.....");
//         getData(3,() =>{
//             console.log("getting data4......");
//             getData(4);
//         });
//     });
// });
//data1
//data2
//data3


//-----Promise------



// function asyncFunc1(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//           console.log("data1");
//           resolve("success");
//         },4000);
//     });
// }
// function asyncFunc2(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//           console.log("data2");
//           resolve("success");
//         },6000);
//     });
// }

// console.log("fetching data1....");
// asyncFunc1().then((res) =>{
//     console.log(res);
//     console.log("fetching data2....");
//     asyncFunc2().then((res) =>{
//         console.log(res);
//     });
// });




// const getPromise = () =>{
//     return new Promise((resolve, reject) =>{
//     console.log("i am a promise");
//     resolve("success");
//     // reject("Network error");
// });
// };

// let promise =getPromise();
// promise.then((res) =>{
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) =>{
//     console.log("rejected", err);
// });

// function getData(dataId, getNextData) {
//     return new Promise ((resolve, reject) =>{
//          setTimeout(() =>{
//         console.log("data", dataId);
//         resolve("success");
//         if(getNextData) {
//             getNextData();
//         }
//     }, 5000);
//     });
// };

//Async Await-------------

// function api () {
//     return new Promise((resolve, reject) =>{
//         console.log("weather data");
//         resolve(200);
//     }, 2000);
// };

// async function getWeatherData() {
//     await api(); //1st
//     await api();
// };

// function getData(dataId) {
//     return new Promise((Resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             Resolve("success");

//         }, 2000);
//     });
// }

// //async-await
// async function getAllData() {
//     console.log("getting data1.....");
//     await getData(1);
//     console.log("getting data2.....");
//     await getData(2);
//     console.log("getting data3.....");
//      await getData(3);
//      console.log("getting data4.....");
//       await getData(4);
//       console.log("getting data5.....");
//        await getData(5);
//        console.log("getting data6.....");
//         await getData(6);
//         console.log("getting data7.....");
//          await getData(7);
// };


//---IIFE: Immediately Invoked Function Expression

// function getData(dataId) {
//     return new Promise((Resolve, reject) =>{
//         setTimeout(()=>{
//             console.log("data", dataId);
//             Resolve("success");

//         }, 2000);
//     });
// }
//  (async function () {
//     console.log("getting data1.....");
//     await getData(1);
//     console.log("getting data2.....");
//     await getData(2);
//     console.log("getting data3.....");
//      await getData(3);
//  })();


//-----Fetch API--------


const URL = "https://official-joke-api.appspot.com/jokes/programming/random";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");



const getFacts = async() =>{
    console.log("getting data.....")
    let response = await fetch(URL);
console.log(response); //JSON format
let data= await response.json();
factPara.innerText = data[1 ].text;
};

btn.addEventListener("click", getFacts);


