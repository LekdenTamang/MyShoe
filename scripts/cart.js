// Initialize cart array from local storage or an empty array if not present
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartContainer =  document.getElementById('cartContainer');
// Initialize count from local storage or 0 if not present
// let count = parseInt(localStorage.getItem('count')) || 0;
// Function to add an item to the cart
function addToCart(item) {
    item.selectedSize = selectedSize;
  cart.push(item);
  // count++;
    console.log(`Item added to cart: ${item.title} - Size ${selectedSize}`);
  console.log(cart);
  // console.log(count);
  // Save the updated cart array to local storage
  localStorage.setItem('cart', JSON.stringify(cart));
  // localStorage.setItem('count', count);
  updateCartIcon();
}

// Get the cart summary container
let cartSummaryContainer = document.querySelector('.cart-summary');
 
// Function to dynamically create a card for each cart item

function updateSummaryCart(){

  
  if(cart.length === 0){
    cartContainer.innerHTML = `<div class="container my-5">
    <div class="p-5 text-center bg-body-tertiary rounded-3">
    <img src="images/shopping-bag-icon.webp" class="img-fluid" alt="shopping bag icon" style="width:100px">
      <h1 class="text-body-emphasis">Hey, it feels so light!</h1>
      <p class="col-lg-8 mx-auto fs-5 text-muted">
      There is Nothing in your bag. Lets add some items.
      </p>
      <div class="d-inline-flex gap-2 mb-5">
        <a href="shop.html"><button class="d-inline-flex align-items-center btn btn-dark btn-lg px-4 rounded-pill" type="button">
          GO TO SHOP
         </button></a>
      </div>
    </div>
  </div>`;

    
  }
  else{
    let totalItems = cart.length;
  let totalMRP = 0;
  let totalDiscount= 0;
  const platformFee = 99;
  let shippingFee = 'FREE';
  let totalAmount = 0;

  cart.forEach((item)=>{
    totalMRP += item.price;
    totalDiscount += parseInt((item.price * item.discountPercentage / 100).toFixed()) ;
    
    if(shippingFee === "FREE"){
      totalAmount = totalMRP - totalDiscount + platformFee;
    }
    else{

      totalAmount = totalMRP - totalDiscount + shippingFee + platformFee;
    }
    
  }
  
  )
    cartSummaryContainer.innerHTML =` <div class="card text-bg-light mb-3 rounded-0 container" style="max-width: 400px;">
    <div class="card-header fs-4 text-center">Summary</div>
    <div class="card-body">
      <h6 class="fs-6">PRICE DETAILS(${totalItems}Item)</h6>
    <div class="Totalprice d-flex justify-content-between pb-3">
    <span>Total MRP</span><span>₹ ${totalMRP}</span>
    </div>
    <div class="Discountprice d-flex justify-content-between pb-3">
        <span>Discount on MRP</span><span class="text-success">-₹ ${totalDiscount}</span>
    </div>
    <div class="Platformprice d-flex justify-content-between pb-3">
        <span>Platform Fee</span><span>₹ ${platformFee}</span>
    </div>
    <div class="Shippingprice d-flex justify-content-between pb-3">
        <span>Shipping Fee</span><span>${shippingFee}</span>
    </div>
    <hr>
    <div class="Totalprice d-flex justify-content-between">
        <span class="fw-bold">Total Amount</span><span class="fw-bold">₹ ${totalAmount}</span>
    </div>
  </div>
  <div class="orderBtnCont  ">
  <button type="button" class="btn btn-danger rounded-0"style="width: 100%;" data-bs-toggle="modal" data-bs-target="#createAccountModal">
  PLACE ORDER
</button>
    
  </div>
  
  </div>`
  }
  




}

updateSummaryCart();




// Get the cart product container
let cartProductContainer = document.querySelector('.cart-product-container');

// Function to dynamically create a card for each cart item
function createCartItemCard(item) {
  let discount = (item.price * item.discountPercentage / 100).toFixed();
  return `
    <div class="card mb-3 container" style="max-width: 600px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${item.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text"><strong>Type:</strong> ${item.type}</p>
            <p class="card-text"><strong>Size:</strong> ${item.selectedSize}</p>
            <p class="card-text">
            <strong>Price:</strong>
            <span>Rs ${item.price - discount}</span>
            <span class="text-secondary text-decoration-line-through">₹ ${item.price}</span>
            <span class="discount-price text-success">${item.discountPercentage} % OFF</span>
            </p>

            <div class="removeBtnCont text-end">
              <button type="button" class="btn btn-danger" onclick="removeCartItem('${item.id}')">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to display cart items
function displayCartItems() {
  cartProductContainer.innerHTML = '';

  cart.forEach(item => {
    const cardHtml = createCartItemCard(item);
    cartProductContainer.innerHTML += cardHtml;
  });
}

// Function to remove an item from the cart
function removeCartItem(itemId) {

  let text = "are you sure you want to remove the item from the CART?";
  if (confirm(text) == true) {
  // Find the index of the item in the cart array
  const index = cart.findIndex(item => item.id == itemId);
  
  // If the item is found, remove it from the cart
  if (index !== -1) {
    cart.splice(index, 1);
    // count--;
    console.log(`Item removed from cart: ${itemId}`);
    // console.log(count);
    updateLocalStorage(); // Update local storage
    updateCartIcon();
    updateSummaryCart();
    displayCartItems(); // Update the displayed items
  } else {
    console.warn(`Item not found in cart: ${itemId}`);
  }
  } else {
  
  }
    
  }
  
  // Function to update local storage with the current cart state
  function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    // localStorage.setItem('count', count);
  }
  
// Example: Display cart items
displayCartItems();

