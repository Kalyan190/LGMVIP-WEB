let string = ""
let buttons = document.querySelectorAll(".button");


  function deleteDigit() {
    string = string.slice(0, -1);
    document.querySelector(".input").value = string;
  }

Array.from(buttons).forEach((button)=>{
   button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
        string = eval(string)
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
        string = ""
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'X'){
           deleteDigit();
    }
    else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    
   })
})