let numberOfcolors = document.querySelector(".num");
let generate = document.querySelector("#gen");
let clear = document.querySelector("#clr");
let output = document.querySelector(".outputs");
let type = document.querySelector("#colorFormat");
let copy=document.getElementById("copy");
let colorRGB=[];
let colorHEX=[];

generate.addEventListener("click", () => {
  while (output.hasChildNodes()) {
    output.removeChild(output.firstChild);
  }
  colorHEX=[];
  colorRGB=[];
  if (
    (screen.width < 800 && numberOfcolors.value > 8) ||
    numberOfcolors.value > 15
  ) {
    alert("Max 15 colors allowed");
    numberOfcolors.value = 0;
    return;
  } else {
    for (let i = 0; i < numberOfcolors.value; i++) {
      const out = document.createElement("div");

      if (type.value == "hex") {
        let finColor = genColorHEX();
        out.style.backgroundColor = `#${finColor}`;
        out.innerText = `#${finColor}`;
        colorHEX+=`#${finColor}\n`;
    } else if (type.value == "rgb") {
        let finColor = genColorRGB();
        out.style.backgroundColor = `rgb(${finColor})`;
        out.innerText = `rgb\n(${finColor})`;
        colorRGB+=`(${finColor})\n`;
      }
      document.querySelector(".outputs").appendChild(out);
    }
    document.getElementById("copy").style.display = "inline";
  }
});

clear.addEventListener("click", () => {
  copy.style.display = "none";
  while (output.hasChildNodes()) {
    output.removeChild(output.firstChild);
  }
  numberOfcolors.value = 0;
});

const hexFormat = (code) => {
  if (code.length == 1) {
    return "0" + code;
  } else return code;
};

const genColorHEX = () => {
  let result = " ";
  let red = "";
  let green = "";
  let blue = "";

  let red1;
  let green1;
  let blue1;

  red1 = Math.floor(Math.random() * 256);
  green1 = Math.floor(Math.random() * 256);
  blue1 = Math.floor(Math.random() * 256);

  red = hexFormat(red1.toString(16));
  green = hexFormat(green1.toString(16));
  blue = hexFormat(blue1.toString(16));
  result = red + green + blue;

  return result;
};

const genColorRGB = () => {
  let red1;
  let green1;
  let blue1;

  red1 = Math.floor(Math.random() * 256);
  green1 = Math.floor(Math.random() * 256);
  blue1 = Math.floor(Math.random() * 256);
  result = `${red1},${green1},${blue1}`;
  return result;
};

copy.addEventListener("click",()=>{

    if(type.value == "rgb"){
        navigator.clipboard.writeText(colorRGB);
    }
    else{
        navigator.clipboard.writeText(colorHEX);
    }
});