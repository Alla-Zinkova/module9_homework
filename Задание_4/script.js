function pageLoaded() {
  
const width = document.querySelector("#inp1");
const height = document.querySelector("#inp2");
const btn = document.querySelector("button");
const resultNode = document.querySelector(".j-result");

btn.addEventListener("click", sendRequest);

function sendRequest(){
  if(validateInput()){
    let requestURL = "https://picsum.photos/"+width.value+"/"+height.value;
    fetch(`${requestURL}`)
    .then(response => {
       return response.url;
      })
    .then(data => {
      displayResult(data);
    })
  }
  else {
    resultNode.innerHTML = "Одно из чисел вне диапазона от 100 до 300";
  }
}
  
function displayResult(apiData) {
       const card= `
      <img src="${apiData}" />
    `;
    resultNode.innerHTML = card;
}

function validateInput(){
    let validated = true;
    if (width.value === '' || isNaN(+width.value) || height.value === '' || isNaN(+height.value) || height.value < 100 || height.value > 300 || width.value < 100 || width.value > 300) {
      validated = false;
    }
    return validated;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);
