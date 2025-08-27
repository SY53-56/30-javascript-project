/*
const result = document.querySelector(".result")
const text = document.querySelector("#text")
const btn = document.querySelector(".btn")



let task = JSON.parse(localStorage.getItem("data")||"[]")
function toDataShow(textValue){
   
        // create div
    let div = document.createElement("div")
    div.className= "flex w-full mt-3 gap-5 flex-col items-center justify-between p-2 bg-gray-300 rounded mb-2 shadow-lg "
    let div2 = document.createElement("div")
      div2.className= "flex w-full mt-3 gap-5 items-center justify-between p-2 bg-gray-300 rounded mb-2 shadow-lg "
    //create p
    const p = document.createElement("p")
   p.textContent = textValue
   p.className = "cursor-pointer "
 

     let completeBtn = document.createElement("button")
     completeBtn.textContent = "Complete"
     completeBtn.className = "px-4 py-1 border bg-green-300 cursor-pointer shadow-ls rounded"
completeBtn.addEventListener("click",function(){
    p.classList.toggle("line-through") 
})
 

     //delete
     const button = document.createElement("button")
     button.textContent = "Delete"
     button.className = "px-4 py-1 border bg-red-300 cursor-pointer shadow-ls rounded"
     button.addEventListener('click',function(data){
        result.removeChild(div)
        task  =task.filter((t)=>t!==textValue)
        localStorage.setItem("data",JSON.stringify(task))
     })
     div.appendChild(p)
     div2.appendChild(completeBtn)
     div2.appendChild(button)
     div.appendChild(div2)
     result.appendChild(div)
}
function displayInput(){
     let textValue = text.value.trim()
    if(textValue==="")return 
        toDataShow(textValue)
    text.value=""
        task.push(textValue)
    localStorage.setItem("data",JSON.stringify(task))
}
task.forEach(toDataShow)
btn.addEventListener("click",displayInput)

let toggleBtn = document.querySelector('.toggle-button')
const main = document.querySelector(".main")

// Function to apply theme
function themeData(theme) {
    if (theme === "dark") {
        main.style.backgroundColor = "black"
        main.style.color = "white"
        toggleBtn.innerHTML = "light"
    } else {
        main.style.backgroundColor = "white"
        main.style.color = "black"
        toggleBtn.innerHTML = "dark"
    }
}

// Load theme from localStorage or default to light
let savedTheme = JSON.parse(localStorage.getItem("data1") || '"light"')
themeData(savedTheme)

// Toggle theme on button click
toggleBtn.addEventListener("click", function() {
    let currentTheme = JSON.parse(localStorage.getItem("data1") || '"light"')
    let newTheme = currentTheme === "light" ? "dark" : "light"
    localStorage.setItem("data1", JSON.stringify(newTheme))
    themeData(newTheme) // apply the new theme immediately
})


// task track
const range = document.querySelector("#range")
const tasks = document.querySelector(".tasks")
const complete = document.querySelector(".completed")


let count = 0
function rangeData(){
    let rangeValue =range.value
  tasks.textContent= rangeValue
  range,value = ""
}
range.addEventListener("input",rangeData)

*/
const tl = gsap.timeline({ delay: 3 });

tl.to(".anim", {
  x: -600,
  y: 500,
  backgroundColor: "yellow",
  borderRadius: "50%",
  duration: 3
})
.to(".anim", {
  x: -800,
  y: -400,
  duration: 3
});

