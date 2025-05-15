function addToReceipt(productPrice, productCode) {
  var receiptContainer = document.getElementById("receipt");
  total = parseFloat(total) + parseFloat(productPrice);

  totalValueElement = document.getElementById("totalValue");
  totalValueElement.innerHTML = total;

  receiptContainer.innerHTML += `
        <div class="d-flex flex-row justify-content-between">
          <div><h5><b>` + productCode + `</b></h5></small></div>
          <div><h5>` + productPrice + `</h5></div>
        </div>
      `; 
}