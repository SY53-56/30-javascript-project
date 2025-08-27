const jsInterviewQuestions = [
  {
    id: 1,
    question: "What is the difference between var, let, and const in JavaScript?",
    options: [
      { text: "All are exactly the same", correct: false },
      { text: "let and const are block scoped, var is function scoped", correct: true },
      { text: "var is block scoped, let is function scoped", correct: false },
      { text: "const and var are mutable, let is immutable", correct: false }
    ]
  },
  {
    id: 2,
    question: "Explain the concept of hoisting in JavaScript.",
    options: [
      { text: "Variables and functions are moved to the top of their scope before execution", correct: true },
      { text: "Only functions are hoisted, not variables", correct: false },
      { text: "Only variables are hoisted, not functions", correct: false },
      { text: "JavaScript executes code line by line without hoisting", correct: false }
    ]
  },
  {
    id: 3,
    question: "What is the difference between == and === ?",
    options: [
      { text: "== checks value and type, === checks only value", correct: false },
      { text: "== checks only value, === checks value and type", correct: true },
      { text: "Both are strictly equal operators", correct: false },
      { text: "Both are loosely equal operators", correct: false }
    ]
  },
  {
    id: 4,
    question: "What is a closure?",
    options: [
      { text: "A function that calls itself", correct: false },
      { text: "A function inside another function that has access to outer variables", correct: true },
      { text: "A block of code that closes automatically", correct: false },
      { text: "A special type of object", correct: false }
    ]
  },
  {
    id: 5,
    question: "Explain the difference between function declaration and function expression.",
    options: [
      { text: "Function declarations are hoisted, expressions are not", correct: true },
      { text: "Function expressions are hoisted, declarations are not", correct: false },
      { text: "Both are hoisted equally", correct: false },
      { text: "Function declarations must be anonymous", correct: false }
    ]
  },
  {
    id: 6,
    question: "What are arrow functions in JavaScript?",
    options: [
      { text: "Functions with no return value", correct: false },
      { text: "A compact syntax for writing functions, with lexical this", correct: true },
      { text: "A function that always returns an object", correct: false },
      { text: "Functions used only in arrays", correct: false }
    ]
  },
  {
    id: 7,
    question: "What does 'this' refer to in JavaScript?",
    options: [
      { text: "Always the global object", correct: false },
      { text: "Always the function itself", correct: false },
      { text: "It depends on how the function is called", correct: true },
      { text: "It always refers to the parent function", correct: false }
    ]
  },
  {
    id: 8,
    question: "What is the difference between null and undefined?",
    options: [
      { text: "null is an assigned value, undefined means a variable is declared but not assigned", correct: true },
      { text: "Both are the same in JavaScript", correct: false },
      { text: "undefined is used for objects, null for arrays", correct: false },
      { text: "null means zero, undefined means NaN", correct: false }
    ]
  },
  {
    id: 9,
    question: "What are template literals in JavaScript?",
    options: [
      { text: "Strings that use single quotes", correct: false },
      { text: "Strings that allow embedded expressions using backticks (` `)", correct: true },
      { text: "Strings that are immutable", correct: false },
      { text: "Strings created with the String constructor", correct: false }
    ]
  },
  {
    id: 10,
    question: "What is the difference between synchronous and asynchronous code?",
    options: [
      { text: "Synchronous code executes line by line, asynchronous code doesn't block execution", correct: true },
      { text: "Asynchronous code executes first", correct: false },
      { text: "Synchronous code is always faster", correct: false },
      { text: "They are exactly the same in modern JavaScript", correct: false }
    ]
  },
  {
    id: 11,
    question: "What is an IIFE?",
    options: [
      { text: "Immediately Invoked Function Expression", correct: true },
      { text: "Internal Indexed Function Element", correct: false },
      { text: "Inlined If Function Execution", correct: false },
      { text: "Isolated Intermediate Function Expression", correct: false }
    ]
  },
  {
    id: 12,
    question: "What is event bubbling in JavaScript?",
    options: [
      { text: "Events moving from target to root", correct: true },
      { text: "Events moving from root to target", correct: false },
      { text: "Events repeating automatically", correct: false },
      { text: "A method to stop event listeners", correct: false }
    ]
  },
  {
    id: 13,
    question: "What does bind() method do in JavaScript?",
    options: [
      { text: "Calls a function immediately", correct: false },
      { text: "Returns a new function with 'this' bound to a specific object", correct: true },
      { text: "Combines two functions", correct: false },
      { text: "Stops event bubbling", correct: false }
    ]
  },
  {
    id: 14,
    question: "What are JavaScript promises?",
    options: [
      { text: "A way to handle synchronous operations", correct: false },
      { text: "A way to handle asynchronous operations with success/failure states", correct: true },
      { text: "A built-in loop mechanism", correct: false },
      { text: "A method for creating functions", correct: false }
    ]
  },
  {
    id: 15,
    question: "What is async/await in JavaScript?",
    options: [
      { text: "Keywords for creating synchronous code", correct: false },
      { text: "Syntactic sugar for working with promises", correct: true },
      { text: "A function that executes in parallel", correct: false },
      { text: "A special type of loop", correct: false }
    ]
  },
  {
    id: 16,
    question: "What are JavaScript modules?",
    options: [
      { text: "A way to break code into reusable pieces using import/export", correct: true },
      { text: "Only for Node.js applications", correct: false },
      { text: "A function wrapper for objects", correct: false },
      { text: "A JavaScript version control system", correct: false }
    ]
  },
  {
    id: 17,
    question: "What is the difference between map(), filter(), and forEach()?",
    options: [
      { text: "map and filter return new arrays, forEach does not", correct: true },
      { text: "All three return new arrays", correct: false },
      { text: "forEach can break, map cannot", correct: false },
      { text: "filter changes the original array", correct: false }
    ]
  },
  {
    id: 18,
    question: "What does reduce() do in JavaScript?",
    options: [
      { text: "Reduces array size by removing duplicates", correct: false },
      { text: "Executes a reducer function on each element to produce a single value", correct: true },
      { text: "Shortens an array automatically", correct: false },
      { text: "Sorts an array in ascending order", correct: false }
    ]
  },
  {
    id: 19,
    question: "What is the difference between slice() and splice()?",
    options: [
      { text: "slice returns a shallow copy without modifying original array, splice modifies the original array", correct: true },
      { text: "splice is immutable, slice is mutable", correct: false },
      { text: "Both do the same operation", correct: false },
      { text: "slice only works on strings", correct: false }
    ]
  },
  {
    id: 20,
    question: "What is the difference between shallow copy and deep copy?",
    options: [
      { text: "Shallow copy copies only references for nested objects, deep copy copies entire structure", correct: true },
      { text: "Shallow copy copies entire structure, deep copy copies only references", correct: false },
      { text: "Both are identical in JavaScript", correct: false },
      { text: "Deep copy only works on arrays", correct: false }
    ]
  },
  {
    id: 21,
    question: "How can you create objects in JavaScript?",
    options: [
      { text: "Using object literals, constructors, and Object.create()", correct: true },
      { text: "Using only constructors", correct: false },
      { text: "Using only classes", correct: false },
      { text: "Using arrays instead of objects", correct: false }
    ]
  },
  {
    id: 22,
    question: "What is prototype inheritance in JavaScript?",
    options: [
      { text: "Objects inherit properties from other objects via prototype chain", correct: true },
      { text: "Objects inherit only methods, not properties", correct: false },
      { text: "Prototypes are only for functions", correct: false },
      { text: "Prototypes prevent inheritance", correct: false }
    ]
  },
  {
    id: 23,
    question: "What is the difference between localStorage, sessionStorage, and cookies?",
    options: [
      { text: "localStorage and sessionStorage store larger data on client side, cookies are smaller and sent to server", correct: true },
      { text: "All three store data permanently", correct: false },
      { text: "Cookies are only for JSON data", correct: false },
      { text: "sessionStorage lasts forever", correct: false }
    ]
  },
  {
    id: 24,
    question: "What is the difference between querySelector() and getElementById()?",
    options: [
      { text: "querySelector uses CSS selectors, getElementById selects by ID only", correct: true },
      { text: "getElementById can select multiple elements", correct: false },
      { text: "querySelector is faster", correct: false },
      { text: "Both are identical", correct: false }
    ]
  },
  {
    id: 25,
    question: "What are JavaScript events?",
    options: [
      { text: "Actions that happen in the browser (like clicks, inputs)", correct: true },
      { text: "Functions that run automatically", correct: false },
      { text: "Objects that store data", correct: false },
      { text: "HTML attributes only", correct: false }
    ]
  },
  {
    id: 26,
    question: "What is debouncing in JavaScript?",
    options: [
      { text: "Limiting how often a function is executed after rapid events", correct: true },
      { text: "Executing a function multiple times quickly", correct: false },
      { text: "Removing an event listener", correct: false },
      { text: "A way to bounce DOM elements", correct: false }
    ]
  },
  {
    id: 27,
    question: "What is the difference between innerHTML, innerText, and textContent?",
    options: [
      { text: "innerHTML includes HTML tags, innerText respects CSS, textContent gets raw text", correct: true },
      { text: "innerHTML and textContent are same", correct: false },
      { text: "innerText and innerHTML are always identical", correct: false },
      { text: "textContent executes scripts", correct: false }
    ]
  },
  {
    id: 28,
    question: "What is the event loop in JavaScript?",
    options: [
      { text: "A mechanism that handles asynchronous callbacks in the call stack and task queue", correct: true },
      { text: "A type of for loop", correct: false },
      { text: "A method to stop code execution", correct: false },
      { text: "A feature only in Node.js", correct: false }
    ]
  },
  {
    id: 29,
    question: "What are JavaScript primitive data types?",
    options: [
      { text: "string, number, boolean, null, undefined, symbol, bigint", correct: true },
      { text: "object, array, function, class", correct: false },
      { text: "DOM elements and events", correct: false },
      { text: "All data types are objects", correct: false }
    ]
  },
  {
    id: 30,
    question: "Which of the following is an ES6 feature?",
    options: [
      { text: "let and const declarations", correct: true },
      { text: "Only var declarations", correct: false },
      { text: "No arrow functions", correct: false },
      { text: "No template literals", correct: false }
    ]
  }
];


const itemsStore = document.querySelector(".items")
const startBtn = document.querySelector(".start")
const nextBtn = document.querySelector(".next")
const btn = document.querySelector(".btn")
const question = document.querySelector(".question")
const answerBtn = document.querySelector(".answer-btn")
const backBtn = document.querySelector(".back")

startBtn.addEventListener("click",function(){
    btn.style.display = "flex"
    startBtn.style.display= "none"
    showQuestion()

})

let currentQ = 0
let score= 0
function showQuestion() {
  answerBtn.innerHTML = ""; // clear previous buttons

  const currentQuestion = jsInterviewQuestions[currentQ];
  question.textContent = currentQuestion.question;

  currentQuestion.options.forEach(option => {
    const btnCreate = document.createElement("button");
    btnCreate.textContent = option.text;
    btnCreate.classList.add("btnClass");

    // Add click event to check correct/incorrect answer
    btnCreate.addEventListener("click", () => {
      if (option.correct) {
        btnCreate.style.backgroundColor = "green";
        btnCreate.style.color= "white"
        score++;
      } else {
        btnCreate.style.backgroundColor = "red";
         btnCreate.style.color= "white"
      }

      // Disable all buttons after selecting an answer
      const allButtons = document.querySelectorAll(".btnClass");
      allButtons.forEach(b => (b.disabled = true));
    });

    answerBtn.appendChild(btnCreate);
  });
}

function showCore() {
  // Clear previous content
  btn.innerHTML = "";

  const h1 = document.createElement("h1");
  h1.textContent = "Your score";

  const h2 = document.createElement("h2");
  if (score >= 20) {
    h2.textContent = `Very nice! Score: ${score}`;
  } else if (score >= 10 && score < 20) {
    h2.textContent = `Good effort! Score: ${score}`;
  } else {
    h2.textContent = `Your topic is not clear. Score: ${score}`;
  }

  btn.appendChild(h1);
  btn.appendChild(h2);
}



function handleNextButton() {
  currentQ++;
  if (currentQ < jsInterviewQuestions.length) {
    showQuestion();
  } else {
   showCore() // stop at last question
  }
}
backBtn.addEventListener("click",function(){
   currentQ--
   if(currentQ>jsInterviewQuestions.length){
    showQuestion()
   }else{
    backBtn.disabled = true; 
   }
})
nextBtn.addEventListener("click",handleNextButton)