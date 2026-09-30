const text = document.getElementById("text")
const delay = document.getElementById("delay")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

function wait(ms){
  return new Promise(function(resolve){
    setTimeout(resolve, ms);
  })
}

async function displayText(){
  await wait(Number(delay.value));
  output.innerText = text.value;
}

btn.addEventListener("click", displayText)