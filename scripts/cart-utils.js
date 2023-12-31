
function updateCartIcon() {
    let cartIcon = document.getElementById('cartIcon');

    // Retrieve count from local storage
    // let count = parseInt(localStorage.getItem('count')) || 0;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Ensure count is not allowed to go below zero
    // count = Math.max(count, 0);

    if (cart.length > 0) {
        cartIcon.classList.remove('visually-hidden');
        cartIcon.textContent = cart.length;
    } else {
        cartIcon.classList.add('visually-hidden');
    }
}

updateCartIcon();
