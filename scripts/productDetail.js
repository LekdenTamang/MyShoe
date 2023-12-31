// Declare selectedProduct globally
let selectedProduct;
// Declare selectedSize globally
let selectedSize;
// Function to display product details
function displayProductDetails(product) {
   
    let discount = (product.price * product.discountPercentage / 100).toFixed();
    let productDetailsContainer = document.querySelector('.pdContainer');
    if (!productDetailsContainer) {
      console.error('Product details container not found.');
      return;
    }
  
    productDetailsContainer.innerHTML = `
      <div class="col-lg-4 mt-lg-5 border border-secondary">
        <img src="${product.image}" class="img-fluid" alt="...">
      </div>
      <div class="col-lg-8 mt-lg-5 details">
        <h1 class="title pt-4">${product.title}</h1>
        <div class="price row">
        <div class="col-lg-6  col-md-6 col-sm-7 d-flex justify-content-around">
          <span class="product-price fs-5">Rs ${product.price - discount}</span>
          <span class="actual-price fs-5 text-secondary text-decoration-line-through">Rs ${product.price}</span>
          <span class="discount-price fs-5 text-success">${product.discountPercentage} % OFF</span>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-5"></div>
        </div>
        <div class="description mt-4">
          <h5>Description:</h5>
          <p>${product.desc}</p>
        </div>
        <div class="btn-container">
          <p>Select size:</p>
          <button type="button" class="btn btn-dark btns" value="5">5</button>
          <button type="button" class="btn btn-dark btns" value ="6">6</button>
          <button type="button" class="btn btn-dark btns" value = "7">7</button>
          <button type="button" class="btn btn-dark btns" value = "8">8</button>
        </div>
        <div class="purchase-btn-container mt-4 mb-3">
          <button type="button" class="btn btn-dark" id="addtoCartBtn">Add to Cart</button>
          <button type="button" class="btn btn-outline-dark" id="addToWishlistBtn">Add to WishList</button>
        </div>
      </div>`;
      // Set sizes after updating the content
      let sizes = product.size;

      let btns = document.querySelectorAll('.btns');
      console.log(btns);

      let selectedButton = null;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        selectedSize = button.value;

        // Remove the class from the previously clicked button
        if (selectedButton !== null) {
            selectedButton.classList.remove('btn-danger');
            selectedButton.classList.add('btn-dark');
        }

        // Add the class to the currently clicked button
        button.classList.remove('btn-dark');
        button.classList.add('btn-danger');

        // Update the selectedButton variable to the current button
        selectedButton = button;
    });
});

    

      btns.forEach((button) => {
        if (!sizes.includes(parseInt(button.value, 10))) {
          button.disabled = true;
        }});
  }

  // Check if the details page is loaded
if (window.location.href.includes('productDetail.html')) {
 // Get the product ID from the URL
    const productId = new URLSearchParams(window.location.search).get('id');
    // Find the product with the specified ID
    selectedProduct = productList.find(product => product.id == productId);
  
    if (selectedProduct) {
      // Display details of the selected product
      displayProductDetails(selectedProduct);
    } else {
      console.error('Product not found.');
    }
  }



let addBtn = document.getElementById('addtoCartBtn');

addBtn.addEventListener('click', addItem);

function addItem() {
if(!selectedSize){
   alert('Please select a size');
   return;
}
  if (selectedSize) {
    alert('Product added to cart');
    addToCart(selectedProduct);
    
}

  
}

let wishlistBtn = document.getElementById('addToWishlistBtn');

wishlistBtn.addEventListener('click', function(){
  alert("adding Wishlist Feature Coming soon.");
})
