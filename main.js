const hamburgerBtn = document.querySelector(".icon-menu-mobile img");
const crossBtn = document.querySelector('.cross img');
const showMoreBtn = document.querySelector('.testimonial-btn button');
const mobileMenu = document.querySelector(".nav-mobile");
const testimonials = document.querySelectorAll(".testimonial-card");
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    hamburgerBtn.style.display = 'none';
});
crossBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block';
});
showMoreBtn.addEventListener('click', () => {
    testimonials.forEach((testimonial, index) => {
        if(index > 1){
            if(window.getComputedStyle(testimonial).display === "none"){
                testimonial.style.display = 'flex';
            } else {
                testimonial.style.display = 'none';
            }
        }
        
    })
    if(testimonials[2].style.display === 'none') {
        showMoreBtn.innerHTML = `More <img src="images/icons/down-arrow.svg" alt="down icon">`;
    } else {
        showMoreBtn.innerHTML = `Less <img src="images/icons/up-arrow.svg" alt="down icon">`;
    }
});
