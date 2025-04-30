function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    products.forEach((product, index) => {
        categoriesContainer.innerHTML += `
        <div onclick="loadProducts('`+ index + `')" class="card mx-1 custom-button p-3 text-center" style="border: solid 3px black; background-color: rgb(189, 255, 226);">
          <h5>`+ product.category + `</h5>
        </div>
      `;
    });
}

function loadProducts(categoryIndex) {
    var menuContainer = document.getElementById("menuContainer");
    menuContainer.innerHTML = "";

    if (categoryIndex == 0) {
        products[categoryIndex].contents.forEach(content => {
            content.sizes.forEach(size => {

                var checkAvailability = content.isAvailable;

                if (checkAvailability) {
                    menuContainer.innerHTML += `
          <div class="col my-3">
          <div class="card my-3 mx-1 h-100" style="border: solid 3px black">
            <img src="img/`+ size.img + `" class="card-img-top p-3 rounded-5">
            <div class="card-body d-flex justify-content-center align-items-center">
              <h5 class="card-title text-center d-flex align-items-center">
                `+ content.name + ' ' + size.code + `
                <button type="button" onclick="addToReceipt('`+ size.price + `','` + content.code + size.code + `')" 
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
            <img src="img/`+ size.img + `" class="card-img-top p-3 rounded-5">
            <div class="card-body d-flex justify-content-center align-items-center">
              <h5 class="card-title text-center d-flex align-items-center">
                `+ content.name + ' ' + size.code + `
                <button type="button" onclick="addToReceipt('`+ size.price + `','` + content.code + size.code + `')" 
                class="btn btn-sm btn-outline-danger ms-3 px-3 py-3" disabled> Unavailable </button>
              </h5>
            </div>
          </div>
        </div>
            `;
                }

            });
        });

    } else {
        products[categoryIndex].contents.forEach(content => {

            var checkFoodAvailable = content.isAvailable;

            if (checkFoodAvailable) {
                menuContainer.innerHTML += `
        <div class="col my-3">
        <div class="card my-3 mx-1 h-100" style="border: solid 3px black">
          <img src="img/`+ content.img + `" class="card-img-top p-3 rounded-5">
          <div class="card-body d-flex justify-content-center align-items-center">
            <h5 class="card-title text-center d-flex align-items-center">
             `+ content.name + `
              <button type="button" onclick="addToReceipt('`+ content.price + `','` + content.code + `')" 
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
                  <img src="img/`+ content.img + `" class="card-img-top p-3 rounded-5">
                  <div class="card-body d-flex justify-content-center align-items-center">
                    <h5 class="card-title text-center d-flex align-items-center">
                     `+ content.name + `
                      <button type="button" onclick="addToReceipt('`+ content.price + `','` + content.code + `')" 
                      class="btn btn-sm btn-outline-danger ms-3 px-3 py-3" disabled>Unavailable</button>
                    </h5>
                  </div>
                </div>
              </div>
                  `;
            }

        });
    }
}
