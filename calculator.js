//     function calculator() {
//     let operator = prompt("choose an operator (+ , - , / , * , % , **)", '+');
//     let firstNumber = parseInt(prompt("Enter the first number",1));
//     let secondNumber = +prompt("Enter the second number", 1);

//     // if (isNaN(firstNumber || secondNumber)) {
//     //     conform ("Invalid input. Please enter a number")
//     // } else {

//     switch (operator) {
//         case "+":
//             let addition = firstNumber+secondNumber;
//             console.log (`${firstNumber}  ${operator}  ${secondNumber}  =  ${addition}`);
//             // alert (`Total = ${addition}`);
//             if (isNaN(firstNumber && secondNumber)) {
//                     confirm("Invalid number. Please enter a valid number")
//                  } else {
//                        alert (`Total = ${addition}`);
//                  }
//             break;

//             case "-":
//                 let subtraction = firstNumber-secondNumber;
//                 console.log (`${firstNumber}  ${operator}  ${secondNumber}  =  ${subtraction}`);

//                  if (isNaN(firstNumber && secondNumber)) {
//                     confirm("Invalid number. Please enter a valid number")
//                  } else {
//                        alert (`Total = ${subtraction}`);
//                  }
//                 break;

//                 case "*":
//                     let multiplication = firstNumber*secondNumber;
//                     console.log (`${firstNumber}  ${operator}  ${secondNumber}  =  ${multiplication}`);
//                   //   alert (`Total = ${multiplication}`);

//                  if (isNaN(firstNumber && secondNumber)) {
//                     confirm("Invalid number. Please enter a valid number")
//                  } else {
//                        alert (`Total = ${multiplication}`);
//                  }
//                     break;

//                     case "/":
//                         let division = firstNumber/secondNumber;
//                         console.log (`${firstNumber}  ${operator}  ${secondNumber}  =  ${division}`);
//                         // alert (`Total = ${division}`);

//                  if (isNaN(firstNumber && secondNumber)) {
//                     confirm("Invalid number. Please enter a valid number")
//                  } else {
//                        alert (`Total = ${division}`);
//                  }
//                         break;

//                         case "%":
//                             let remainder = firstNumber%secondNumber;
//                             console.log (`${firstNumber}  ${operator}  ${secondNumber}  =  ${remainder}`);
//                            //  alert (`Total = ${remainder}`);

//                  if (isNaN(firstNumber && secondNumber)) {
//                     confirm("Invalid number. Please enter a valid number")
//                  } else {
//                        alert (`Total = ${remainder}`);
//                  }
//                             break;

//                             case "**":
//                                 let exponentiation = firstNumber**secondNumber;
//                                 console.log (`${firstNumber}  ${operator}  ${secondNumber}  =  ${exponentiation}`);
//                               //   alert (`Total = ${exponentiation}`);

//                  if (isNaN(firstNumber && secondNumber)) {
//                     confirm("Invalid number. Please enter a valid number")
//                  } else {
//                        alert (`Total = ${exponentiation}`);
//                  }
//                                 break;

//                                 default :
//                                 console.log ("Enter the correct value")
//      }
//      }

//      alert =(calculator());

//     function calculator () {

//       let operators = +prompt("Choose an operator \n + , - , / , * , % , **",'+');
//       // let num2 = prompt("Enter a second number",2);
//       let num1 = prompt ("Enter a first number", 1);

//       if (operators !== "+" , operators !== "-") {
//             while (){
//                   let operators = +prompt("Choose an operator \n + , - , / , * , % , **",'+');
//             }

//       }

//     }
//     calculator();

// function calculator() {
//   let  operator = prompt("Choose an operator: +,  -,  *,  /,  %,  or  **.", "+");

//    while (true) {

//     if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "%" || operator === "**") {
//       break;
//     } else {
//       let tryAgain =prompt("Invalid operator.Please choose valid: +, -, *, or /", "+");

//       if (!tryAgain) {
//         return;
//       }
//     }
//   }

//   let num1;
//   let num2;

//   while (true) {

//       num1 = parseInt(prompt("Enter the first number", 1));

//     if (isNaN(num1)) {
//       let tryAgain = prompt("Invalid number.Please enter a valid number:", 1);

//       if (!tryAgain) {
//             return;
//       }
//     } else {
//       break;
//     }

//   }

//   while (true) {

//       num2 = parseInt(prompt("Enter the second number", 1));

//       if (isNaN(num2)) {
//       let tryAgain = confirm("Invalid number. Please choose +, -, *, /, %, or **. \n Do you want to try again?");

//       if (!tryAgain) {
//             return;
//       }
//       } else {
//       break;
//       }

//   }

//   let result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "%":
//       result = num1 / num2;
//       break;
//     case "**":
//       result = num1 / num2;
//       break;

//   }

//   alert(`The result is: ${num1} ${operator} ${num2} = ${result}`);
//   console.log(`The result is: ${num1} ${operator} ${num2} = ${result}`);
// }

// calculator();

// function calculator () {

//   let operator = prompt("Choose an operator: +,  -,  *,  /,  %,  or  **.", "+");
//   if (!operator) {
//     return;
//   }
//   while (true) {
//      if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "%" || operator === "**") {
//       break;
//      } else {
//       let tryAgain =prompt("Invalid operator. Try again \nPlease choose valid one: +, -, *, or /", "+");
//      }
//   }

//   let num1 = prompt("Enter the first number", 1)

// }
//     calculator()

// function calculator() {
//   let operator = prompt("Choose an operator: +, -, *, /, %, or **", "+");
//   let validOperators = ["+", "-", "*", "/", "%", "**"];

//   while (!validOperators.includes(operator)) {
//     if (operator === null) {
//       return;
//     }
//     operator = prompt(`Invalid operator ${operator}. Please enter a valid operator: +, -, *, /, %, or **`, "+");
//   }

//   let num1 = +prompt("Enter the first number", 1);
//   let num2 = +prompt("Enter the second number", 1);

//   if (num1 === null || num2 === null) {
//     return;
//   }

//   let result;

//   switch (operator) {
//     case "+":
//       result = num1 + num2;
//       break;
//     case "-":
//       result = num1 - num2;
//       break;
//     case "*":
//       result = num1 * num2;
//       break;
//     case "/":
//       result = num1 / num2;
//       break;
//     case "%":
//       result = num1 % num2;
//       break;
//     case "**":
//       result = num1 ** num2;
//       break;
//     default:
//       result = "Invalid operator";
//   }

//   alert(`The result is: ${result}`);
// }

// calculator();

function calculator() {
  let operator;

  do {
    operator = prompt("Choose an operator: +, -, *, /, %, or **.", "+"); // null
    if (!operator) {
      // ! + null = true
      return;
    }
  } while (!["+", "-", "*", "/", "%", "**"].includes(operator));

  let num1, num2;

  do {
    num1 = Number(prompt("Enter the first number", 1));
  } while (isNaN(num1));

  do {
    num2 = Number(prompt("Enter the second number", 2));
  } while (isNaN(num2));

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    case "**":
      result = num1 ** num2;
      break;
    default:
      result = "Invalid operator";
  }

  alert(`The result is ${result}`);
}

calculator();
