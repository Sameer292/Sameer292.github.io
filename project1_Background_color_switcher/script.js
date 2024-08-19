
const buttons = document.querySelectorAll(".button")
const body = document.body.style


buttons.forEach((button)=>{
button.addEventListener("click",(e)=>{
    body.backgroundColor=e.target.id
    e.target.id === 'blue'?(body.color='white'):body.color='black'
})
button.style.backgroundColor=button.id;
button.style.height="150px"
button.style.width="150px"
button.style.border="solid 2px black"
button.style.margin="5px"
})