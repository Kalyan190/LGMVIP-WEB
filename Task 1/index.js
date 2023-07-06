const input_box = document.getElementById("input-box");
const task_box = document.getElementById("list-container");

function AddTask(){
    if(input_box.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        task_box.appendChild(li);
        task_box.style.overflow = scroll;
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    input_box.value = "";
   // saved();
}
let date1 = document.getElementById("set1");
let date2 = document.getElementById("set2");
let date3 = document.getElementById("set3");
// let date4 = document.getElementById("set4");
// let date5 = document.getElementById("set5");
// let date6 = document.getElementById("set6");

const d = new Date();
date1.innerHTML =  "Date: "+ d.getDate();
date2.innerHTML = ": "+ ( d.getMonth() + 1);
date3.innerHTML = ": "+d.getFullYear() +"";


function updateTime() {
    var now = new Date();
    
    // Get the current time components
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    // Format the time components to have leading zeros if necessary
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    // Update the time display in your HTML element
    var timeElement = document.getElementById('set4');
    timeElement.textContent = "Time:" + hours + ':' + minutes + ':' + seconds;
  }
  
  // Call updateTime immediately to set the original time
  updateTime();
  
  // Update the time every second (1000 milliseconds)
  setInterval(updateTime, 1000);


task_box.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checker");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();

    }
},false); 
