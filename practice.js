// let num = prompt("Enter a Number")

// if(num %5 === 0){
//     console.log(num, "is a multiple of 5");
// }else{
//     console.log(num, "is NOT a multiple of 5");
// }


// write a code which can give grades to students according to their scores:


// let score =87; //->userInput; //let score = prompt("Enter your score")
// let grade;
// if(score>=90 && score<=100) {
//     grade = "A";
// }else if (score >= 70 && score <= 89){
//     grade = "B";
// }else if (score >=60 && score <= 69){
//     grade ="C";
// }else if(score >=50 && score <= 59){
//     grade ="D";
// }else if (score >=0 && score <= 49){
//     grade = "F";
// }
// console.log("according to your score, your grade was:", grade);

//practice Q 0to 100 even number print 

// for(let num=0; num<=100; num++) {
//     if(num%2===0){
//         console.log("num=", num)
//     }
// }

//random game number. Ask the user to keep guessing the game number until the user enter correct value.


// let gameNum = 23;

// let userNum = prompt("Guess the game Number: ");

// while(userNum != gameNum){
//    userNum = prompt("you entered wrong number. Guess again: ");

// }

// console.log("congratualtions, you enter the right number");

//prompt the user to enter their full name. Generate a username for them based on the input start username with @, followed by their full name and ending with the fullname length.

// let fullName = prompt("enter your fullname without spaces");

// let username = "@" +fullName + fullName.length;
// console.log(username);

//ARRAY IN JS


// 

// let items = [200,500,600,835,800];
// // let i =0;
// // for(let val of items) {
// //     let offer = val/10;
// //    items[i] =  items[i] - offer;
// //     console.log(`value after offer ${items[i]}`);
// //      i++;
// //}
// for(let i= 0; i<items.length; i++){
// let offer = items[i] / 10;
// items[i]-=offer;
// }

// console.log(items);

// let companies = ["bloomberg","Microdoft","uber","google","Ibm","Netflix"];


// // companies.shift();

// // companies.splice(2,1,"ola");

// companies.push("Amazon");





//  function countVowels(str) {
//      let count  = 0;
//      for(const char of str) {
//          if(char==="a" ||
//               char==="e" ||
//               char==="i" ||
//               char==="o" ||
//               char==="u"
//              ){
//              count++;
//          }
//      }
//      console.log(count);
//  }

//  const countVow =(str) => {
//     let count  = 0;
//     for(const char of str) {
//         if(char==="a" ||
//              char==="e" ||
//              char==="i" ||
//              char==="o" ||
//              char==="u"
//             ){
//             count++;
//         }
//     }
//     return count;
//  };

// let nums= [56,77,45,68];




// nums.forEach((num) => {
//     console.log(num*num);
// });


//student of marks filter out

// let marks = [89,90,99,78,67,45,88];

// const touper=marks.filter((val) =>{
//     return val > 80;
// });

// console.log(touper);


// let n = prompt("Enter a number : ");

// let arr =[];

// for(let i=0; i<=n; i++) {
//     arr[i-1] = i;
// }
// console.log(arr);

// let sum=arr.reduce((res, curr)=>{
//     return  res +curr;
// });

// console.log("sum=", sum);

// let factorial=arr.reduce((res, curr)=>{
//     return  res *curr;
// });

// console.log("factorial=",factorial);


//--------

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);


// h2.innerText= h2.innerText+ " form Apna College student";


//_________________________________
// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(div of divs) {
//     div.innerText = `new unique value ${idx}`
//     idx++;
// }
// // divs[0].innerText ="new unique value one";
// // divs[1].innerText ="new unique value two";
// // divs[2].innerText ="new unique value three";

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));

// let div = document.querySelector("div");
// div.style.backgroundColor = "green"
// div.style.backgroundColor = "purple"


// div.style.fontSize="20px";

// div.innerText="hello"

//insert Element

// let newBtn = document.createElement("button");
// newBtn.innerText="click me!";
// console.log(newBtn);

// let p = document.querySelector("p");
// p.after(newBtn);


// let newHeading = document.createElement("h1");

// newHeading.innerHTML="<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);

// //Delete Element

// let para= document.querySelector("p");
// para.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText="click me!";

// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newBtn);


// let para = document.querySelector("p");
// para.classList.add("newClass");

//-----Event in Js


// let mode = document.querySelector("#mode");
// let body = document.querySelector("body");

// let currMode ="light"; //dark

// mode.addEventListener("click", ()=> {
//    if(currMode ==="light") {
//     currMode= "dark";
//     body.classList.add("dark");
//     body.classList.remove("light")
//    }else{
//     currMode ="light"
//      body.classList.add("light");
//     body.classList.remove("dark")
//    }

//    console.log(currMode);
// });