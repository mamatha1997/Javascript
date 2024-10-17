// var vs let vs const

// Scope
// var a = 5;
// console.log(a);

//Variable shadowing
// function test() {
//   let a = "Hello";

//   if (true) {
//     let a = "hello";
//     console.log(a);
//   }
//   console.log(a);
// }
// test();

//illegal Shadowing
// function test() {
//   var a = "Hello";
//   let b = "Bye";

//   if (true) {
//     let a = "hi";
//     var b = "Goodbye";
//     console.log(a);
//     console.log(b);
//   }
// }
// test();

//Declaration
//1-with this we can redeclare this as many times as we can
// var a;
// var a;

//2-will get an error that a has already been declared
// let a ;
// let a ;

//3 - we will get Missing initialization in const declaration
// const a ;
// const a ;

//4-this is fine because it comes under shawdowing
// let a;
// {
//   let a;
// }

//Declaration without initialisation
// var a; //this is fine
// let a; //this is also fine
//const a; //this will give error. We need to decalre it with a value.

//Re-initialisation
//1- var-> will work
// var a =5;
// a=6;

//2-let-> will work
// let a=5;
// a = 6;

//3-const-> will give error
// const a= 5;
// a = 6;

//Hoisting
//1-var-> they are hoisted
// console.log(count); // will gve undefined
// var count = 1;

// temporary dead zone(time between the decalartion and initialzation of let and const variables)

//2-let-> hoisted in temporary dead zone.
// console.log(count); //Cannot accss'count before initialization
// let count = 1;

//3-const-> hoisted in temporary dead zone.
// console.log(a, b, c);
// const a = 5;
// let b = 3;
// var c = 2;
