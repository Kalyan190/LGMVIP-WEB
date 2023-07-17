let names = document.getElementById("name");
let emails = document.getElementById("email");
let github = document.getElementById("website");
let profile = document.getElementById("image-link");
let male = document.getElementById("male");
let female = document.getElementById("female");
let tick = document.querySelectorAll(".tick");
let subm = document.getElementById("sub");
let table = document.getElementById("enrollList");

function enroll(){
    let box2 = document.querySelector(".box2");
    box2.style.display = "flex";
    
    let gender, skills = "";
    if(male.checked){
        gender = "Male";
    }
    else if(female.checked){
        gender = "Female";
    }
    else {
        gender = "Not specified";
    }

    for(let i=0; i<tick.length; i++){
        if(tick[i].checked){
            skills += tick[i].value + " ";
        }
    }
     
    // create new row at enrollment
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
    <tr>
    <td id="info">
    ${names.value} 
    <br/>${emails.value}  
    <br/><a href="${github.value}">${github.value}</a><br/>
    <br/>${gender}
    <br/>${skills}
    </td>
    <td id="imgSrc">
        <img src="${profile.value}" alt="error">
    </td>
    </tr> 
    `;
    // console.log(profile);

    //append the row
    table.appendChild(newRow);
   document.querySelector("form").reset();

}




