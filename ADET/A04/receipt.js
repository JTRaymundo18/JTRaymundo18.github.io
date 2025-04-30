var total = 0;

function addToReceipt(price, code){
  var receiptContainer = document.getElementById("receipt");
  total = parseFloat(total) + parseFloat(price);

  totalValueElement = document.getElementById("totalValue");
  totalValueElement.innerHTML = total;
  
  receiptContainer.innerHTML += `
    <div class="d-flex flex-row justify-content-between">
      <div><h5><b>`+code+`</b></h5></div>
      <div><h5>`+price+`</h5></div>
    </div>
  `;
}
