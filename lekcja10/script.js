"use strict";

let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let desc = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function(){
    
    // document.body.classList.remove("hero");
    // document.body.classList.add("villain");
    
    let isHero = document.body.classList.contains("hero");
    if(isHero) {
        document.body.classList.replace("hero", "villain");
        name.textContent = "Midas";
        desc.textContent = "Bezwzględny boss";
        avatar.src = "https://api.dicebear.com/11.x/pixelbot/svg?seed=0fxzi83c";
        avatar.style.borderColor = "#ef4444"
        toggleBtn.style.backgroundColor = "#ef4444"
        toggleBtn.textContent = "Zmień na superbohatera"
    }
    else{
        document.body.classList.replace("villain", "hero");
        name.textContent = "Jonesy";
        desc.textContent = "Odważny bohater";
        avatar.src = "https://api.dicebear.com/10.x/adventurer/svg?seed=7aoh5o7v";
        avatar.style.borderColor = "#3b82f6"
        toggleBtn.style.backgroundColor = "#3b82f6"
        toggleBtn.textContent = "Zmień na złoczyńce"
    }
});
