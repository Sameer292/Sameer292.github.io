const timer = document.querySelector(".clocktimer")


setInterval(() => {
        timer.innerHTML= new Date().toLocaleTimeString([],{hour12:true});
    
}, 1000);