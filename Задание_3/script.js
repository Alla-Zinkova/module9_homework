function f1() { 
console.log("Число вне диапазона от 1 до 10");
}

const btn = document.querySelector("button");


btn.addEventListener("click", () => {
  let inp = document.getElementById("inp").value;
  const reqUrl =`https://picsum.photos/v2/list?limit=${inp}`;
  const resultNode = document.querySelector('.j-result');
  
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
  
    if(inp > 10){
     f1();
  } else {
     f2(reqUrl, displayResult);           
  }
  
  function f2(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
  };
  
  xhr.send();
};
  
});
