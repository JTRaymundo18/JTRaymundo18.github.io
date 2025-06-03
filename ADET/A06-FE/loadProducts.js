var categories = [];
var products = [];
var total = 0;

const getAllCategories = async () => {
  fetch(
    'http://localhost/JTRaymundo18.github.io/ADET/A06-BE/categories.php'
  )
    .then(response => response.json())
    .then(data => {
      categories = data;
      loadCategories();
    });
}

const getAllProducts = async (categoryID) => {
  const categoryData = {
    categoryID: categoryID
  };

  fetch(
    'http://localhost/JTRaymundo18.github.io/ADET/A06-BE/products.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(categoryData)
  })
    .then(response => response.json())
    .then(data => {
      products = data;
      loadProducts();
    });
}

function loadCategories() {
  var categoriesContainer = document.getElementById("categories");

  categories.forEach((category) => {

    categoriesContainer.innerHTML += `<div onclick="getAllProducts('` + category.categoryID + `')" class="card mx-1 custom-button p-3 text-center" style="border: solid 3px black; background-color: rgb(189, 255, 226);">
          <h5>`+ category.categoryName + `</h5>
        </div>
      `;

  });
}

function loadProducts(categoryID) {
  var maincontainer = document.getElementById("menuContainer");
  maincontainer.innerHTML = "";

  products.forEach(product => {

    var checkAvailability = product.isAvailable;

    if (checkAvailability == 'Yes') {
      menuContainer.innerHTML += `
        <div class="col my-3">
        <div class="card my-3 mx-1 h-100" style="border: solid 3px black">
          <img src="img/`+ product.productImage + `" class="card-img-top p-3 rounded-5">
          <div class="card-body d-flex justify-content-center align-items-center">
            <h5 class="card-title text-center d-flex align-items-center">
             `+ product.productName + `
              <button type="button" onclick="addToReceipt('`+ product.productPrice + `','` + product.productCode + `')" 
              class="btn btn-sm btn-outline-primary ms-3 px-3 py-3">Add to Order</button>
            </h5>
          </div>
        </div>
      </div>
          `;

    } else {

      menuContainer.innerHTML += `
                <div class="col my-3">
                <div class="card my-3 mx-1 h-100" style="border: solid 3px black; background-color: rgba(255, 255, 255, 0.5);">
                  <img src="img/`+ product.productImage + `" class="card-img-top p-3 rounded-5">
                  <div class="card-body d-flex justify-content-center align-items-center">
                    <h5 class="card-title text-center d-flex align-items-center">
                     `+ product.productName + `
                      <button type="button" onclick="addToReceipt('`+ product.productPrice + `','` + product.productCode + `')" 
                      class="btn btn-sm btn-outline-danger ms-3 px-3 py-3" disabled>Unavailable</button>
                    </h5>
                  </div>
                </div>
              </div>
                  `;
    }
  });
}