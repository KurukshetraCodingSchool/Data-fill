var btn =  document.querySelector("button")
h1 = document.querySelector("#h1");
h2 = document.querySelector("#h2");
h3 = document.querySelector("#h3");
h4 = document.querySelector("#h4");
var count = 0;
btn.addEventListener("click",()=>{
    if (count===0) {
        h1.innerHTML = `Name :${name}`
    h2.innerHTML = "Add : Bhopal"
    h3.innerHTML = "Mob: 123456790"
    h4.innerHTML = "Age : 22"
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


