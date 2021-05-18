function pageLoaded() {
  
const number = document.querySelector("#inp1");
const limit = document.querySelector("#inp2");
const btn = document.querySelector("button");
const resultNode = document.querySelector(".j-result");

const data = localStorage.getItem("localData");
  
displayResult(JSON.parse(data));

btn.addEventListener("click", sendRequest);

function sendRequest(){
  if(validateInput()){
    let requestURL = " https://picsum.photos/v2/list?page="+number.value+"&limit="+limit.value;
    fetch(`${requestURL}`)
    .then(response => {
       return response.json();
      })
    .then(data => {
      localStorage.setItem("localData", JSON.stringify(data));
      displayResult(data);
    })
  }
}
  
function displayResult(apiData) {
  let cards = '';
  // console.log('start cards', cards);
  
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  
  // console.log('end cards', cards);
    
  resultNode.innerHTML = cards;
}

function validateInput(){
    let validated = true;
    if (number.value === '' || isNaN(+number.value) || limit.value === '' || isNaN(+limit.value) || number.value > 10 && limit.value > 10 || number.value < 1 && limit.value < 1 || number.value > 10 && limit.value < 1 || number.value < 1 && limit.value > 10){
      resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10"
      validated = false;
    }
    else if(number.value < 1 || number.value > 10){
      resultNode.innerHTML = "Номер страницы вне диапазона от 1 до 10"
      validated = false;      
    }
    else if(limit.value < 1 || limit.value > 10){
      resultNode.innerHTML = "Лимит вне диапазона от 1 до 10"
      validated = false;      
    }
    return validated;
  }
}

document.addEventListener("DOMContentLoaded", pageLoaded);