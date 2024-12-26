var btn =  document.querySelector("button")
h1 = document.querySelector("#h1");
h2 = document.querySelector("#h2");
h3 = document.querySelector("#h3");
h4 = document.querySelector("#h4");
var count = 0;

function add() {
    username = prompt("Enter you name")
    address = prompt("Enter your Address")
    phone = prompt("Enter your Phone")
    age = prompt("Enter your Age")
}

btn.addEventListener("click",()=>{
    
    if (count===0) {
        add();
    h1.innerHTML = `Name :${username}`
    h2.innerHTML = `Add : ${address}`
    h3.innerHTML = `Mob:${phone}`    
    h4.innerHTML = `Age : ${age}`
    btn.innerHTML = "Remove Data"
    btn.style.backgroundColor = "Red"
    count++;
    }
    else{
        h1.innerHTML = `Name:`
        h2.innerHTML = "Add :"
        h3.innerHTML = "Mob:"
        h4.innerHTML = "Age :"
        btn.innerHTML = "Add Data"
        btn.style.backgroundColor = "Green"
        count--;
    }
  
})


