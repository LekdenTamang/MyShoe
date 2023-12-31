
// Finding the discounted amount
let discount;
let products;
productList.forEach((product) => {
  discount = (product.price * product.discountPercentage / 100);
});

// Store the discount as a numeric value in the window object
window.discount = parseFloat(discount);




//Calling a function  onload

window.onload = displayProducts(productList);



//Displaying the products


function displayProducts(productList){
 
products = document.querySelector('.display-products'); 
products.innerHTML = "";
  
    if(productList.length === 0){

      products.innerHTML = `<p class="m-5">NO RESULT FOUND</p>`;
      return;
    }
    

    productList.forEach((product)=>{
        // Calculate discount for each product individually
    let discount = (product.price * product.discountPercentage / 100).toFixed();

      products.innerHTML+=`<div class="col-lg-3 my-3">
      
      <div class="card border-0 rounded-0 shadow" style="width: 14rem;" id='${product.id}'>
          <img src="${product.image}" class="card-img-top rounded-0" alt="...">
          <div class="card-body">
              <div class="row">
                  <div class="col-10">
                      <p class="card-title product-name">${product.title}</p>
    
                      <p class="card-text product-type"> 
                          ${product.type}
                      </p>
                  </div>
    
              </div>
          </div>
          <div class="row align-items-center text-center g-0">
              <div class="col-4">
                  <p class="fw-bold""> ₹ ${product.price - discount}</p>
              </div>
              <div class="col-3">
                  <p class="text-decoration-line-through text-body-tertiary"> ₹ ${product.price}</p>
              </div>
              <div class="col-5" style="font-size:12px">
                  <p class="text-warning">discount(${product.discountPercentage}%)</p>
              </div>
             
              
          </div>
      </div>
      
    </div>
    `
    
    });
      // Adding Event listener to all cards
    let cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    card.addEventListener('click', check);
  });
}
//adding Event listener to all checkboxes

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox)=>{
  checkbox.addEventListener('change',filterProducts);
});


//Filter function


function filterProducts (){
  
  products.innerHTML = "";
//assigning  the  vaiables by type
  let sneaker = document.querySelector('#sneaker');
  let casual = document.querySelector('#casual');
let workoutAndRunning = document.querySelector('#workrun');
let sandles = document.querySelector('#sandles');
//assigning the variables by Price
let price500To1000 = document.querySelector('#price500To1000');
let price1000To1500 = document.querySelector('#price1000To1500');
let price1500To2000 = document.querySelector('#price1500To2000');
let price2000To2500 = document.querySelector('#price2000To2500');
//assigning the variable by discount
let discount10abv = document.querySelector('#dis10perAbove');
let discount20abv = document.querySelector('#dis20perAbove');
let discount30abv = document.querySelector('#dis30perAbove');
//using Filter method to filter the products
let filterList = productList.filter((prod)=>{
  //filter By Types
let typeFilter = (sneaker.checked && prod.type === "Sneaker") || (casual.checked && prod.type === "Casual") || (workoutAndRunning.checked && prod.type === "WorkoutAndRunning") || (sandles.checked && prod.type === "Sandle") || (!sneaker.checked && !casual.checked && !workoutAndRunning.checked && !sandles.checked);
// Filter by Price
let priceFilter = (price500To1000.checked && prod.price - discount >=500 && prod.price - discount <=1000) || (price1000To1500.checked && prod.price - discount >=1000 && prod.price - discount <=1500) || (price1500To2000.checked && prod.price - discount >=1500 && prod.price - discount <= 2000) || (price2000To2500.checked && prod.price>=2000 && prod.price<=2500) || (!price500To1000.checked && !price1000To1500.checked && !price1500To2000.checked && !price2000To2500.checked);
//Filter By Discount
let discountFilter =(discount10abv.checked && prod.discountPercentage >= 10) ||
(discount20abv.checked && prod.discountPercentage >= 20) ||
(discount30abv.checked && prod.discountPercentage >= 30) ||
(!discount10abv.checked && !discount20abv.checked && !discount30abv.checked)


//returning the filter
return typeFilter && priceFilter && discountFilter;
});


displayProducts(filterList);


}

// Function to handle card click event
function check(e) {
  let selectedId = e.currentTarget.id;

  productList.forEach((product) => {
    if (selectedId == product.id) {
      console.log(`Selected ID: ${selectedId}, Product ID: ${product.id}`);
      // Navigate to the details page with the selected product ID
      let url = `productDetail.html?id=${selectedId}`;
   
      window.open( url, '_blank');
    }
  });
}










