// let num1 = window.prompt("enter number");
// let num2 = window.prompt("enter number");
// window.alert(typeof num1,);
// window.alert(typeof num2);
// let sum = parseInt(num1) + parseInt(num2);
// window.alert(sum);
// window.alert(typeof sum);
let num1 = parseInt(window.prompt("enter number1"));
let num2 = parseInt(window.prompt("enter number2"));
let num3 = parseInt(window.prompt("enter number3"));
if (num1 > num2 && num1 > num3) {
  window.alert("num 1 is greater");
} else if (num2 > num3 && num2 > num1) {
  window.alert("num 2 is greater");
} else {
  window.alert("num 3 is greater");
}
