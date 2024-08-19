const submit = document.querySelector("#submit")
const height = document.querySelector("#height")
const weight = document.querySelector("#weight")
const bmi = document.querySelector(".bmi")
const result = document.querySelector(".result")

submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(height.value<=0 || height.value === '' || isNaN(height.value) || weight.value<=0 || weight.value === '' || isNaN(weight.value)){
        // const apnd = document.createElement('h2')
        // apnd.style.marginTop='15px'
        // apnd.innerText=''
        // bmi.appendChild(apnd)
        result.innerHTML=`<h2>Please enter correct values</h2>`
    }
    else{
        // const apnd = document.createElement('h2')
        // apnd.style.marginTop='15px'
        // apnd.innerHTML= `<h2>Your BMI is ${calculateBMI(weight.value,height.value)}</h2>`
        // bmi.appendChild(apnd)
        result.innerHTML= `<h2>Your BMI is ${calculateBMI(weight.value,height.value)}</h2>`
    }

})
function calculateBMI(weight,height){
    return (weight / ((height**2)/10000)).toFixed(2);
}

