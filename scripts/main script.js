//start of nav_link active 

let navLink = document.querySelectorAll(".nav_link");

navLink.forEach((link) => {
    link.addEventListener('click', function (e) {
        // console.log(e);
        navLink.forEach((link) => {
            link.classList.remove("active");
            link.classList.remove("text-decoration-underline");

        })

        let nLink = e.target;
        nLink.classList.add('active');
        nLink.classList.add('text-decoration-underline');


    })
})
//end of nav link active

let wishListLink = document.querySelectorAll(".wishlist");

wishListLink.forEach((btn)=>{
btn.addEventListener('click', function(){
    
    alert("adding Wishlist Feature Coming soon.");
});

})



