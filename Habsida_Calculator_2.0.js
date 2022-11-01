// INPUT
let question = prompt('Input:');
//let question = ("1 +3");
let string_equation = question.split(" ").join("");
console.log(string_equation)

// get NUMBERS 
let split_o = ["*", "/", "-", "+"];
let equation_n_gaps = string_equation;
for (let i=0; i < split_o.length; i++) {
  equation_n_gaps = equation_n_gaps.split(split_o[i]).join(",");
} 
equation_n_gaps = equation_n_gaps.split(",");
let equation_n = equation_n_gaps.filter((item) => item !== '') //just in case
//console.log(equation_n);

// check NUMBER VALUE

// check NUMBER VALUE

function TypeError(message) {
    this.message = message;
}
try {
  for (let i=0; i < equation_n.length; i++) {
  if (equation_n[i] % 1!== 0 || equation_n[i] > 10 || equation_n[i] < 1) {
    throw new TypeError("Try Again");
    }
  }
}
catch(e) {
  alert(e.message);
}
    
  
 // get OPERATORS
 function arrRange(max,min) {
  let arr = [];
  for (let i = max; i >= min; i--)
  arr.push(i);
  return arr; 
 };
 let i = 0;
 let split_n = arrRange(10,1);
 let equation_o_gaps = string_equation;
 while (i < split_n.length) {
 equation_o_gaps = equation_o_gaps.split(split_n[i]).join(",");
i++;
 }
 equation_o_gaps = equation_o_gaps.split(",")
 equation_o = equation_o_gaps.filter((item) => item !== '')
 //console.log(equation_o)

 // check AMOUNT and RATIO of NUMBERS and OPERSTORS
 try { 
  let num_max = 3;
  let op_max = 2;
  if (equation_n.length > num_max || equation_o.length > op_max || equation_n.length !== equation_o.length + 1) {
      throw new TypeError("Incorrect Data");
  }
 }
 catch(e) {
  alert(e.message);  
 }


 //COMBINE EQUATION
 let equation = [];
 for (let i = 0; i < equation_o.length; i++) {
  equation.push(equation_n[i]);
  equation.push(equation_o[i]);
 } 
 equation.push(equation_n[equation_n.length-1]);
 //console.log(equation)

 // CALCULATION
 //split_o = ["*", "/", "-", "+"]
 result_of_three = 0;
 result = [];
 for (let i = 0; i <= split_o.length; i++) {
  
  for (let j = 0; j < equation.length; j++) {
  
   if (split_o[i] === equation[3]) {
     let a = +equation[2];
     let b = +equation[4];
     switch (split_o[i]) {
      case "*":
        result_of_three = a * b;
        break;
      case "/":
        result_of_three = a / b;
        break;
      case "-":
        result_of_three = a - b;
        break;
      case "+":
        result_of_three = a + b;
        break;
     }
     //console.log(result_of_three)
     equation.splice(3,1,String(result_of_three));
     equation.splice(2,1);
     equation.splice(3,1); 
     //console.log(equation);// [ '2', '*', '90' ]
  } else if (split_o[i] === equation[1]) {
     let a = +equation[0];
     let b = +equation[2];
      switch (split_o[i]) {
        case "*":
          result_of_three = a * b;
          break;
        case "/":
          result_of_three = a / b;
          break;
        case "-":
          result_of_three = a - b;
          break;
        case "+":
          result_of_three = a + b;
          break;
       }
     //console.log(result_of_three)
     equation.splice(1,1,String(result_of_three));
     equation.splice(0,1);
     equation.splice(1,1);
     console.log("Output:");
     console.log(+equation);
   } 
  }  
} 
 
   
