const testimonialObjs = [{
    name: "Alexandra J.",
    comment: "The waistcoat arrived this morning. I tried it on and it looks great. Thank your team for their excellent service. I think you for everything. I am preparing to order shirts, so standby.",
    city: "London",
    country: "UK",
    imgsrc: "images/person1.jpg",
    imgdescription: "person1"
},
{
    name: "David B.",
    comment: "I received the new jacket and slacks and I am very happy with both. Wonderful work by the TOT team.",
    city: "Brisbane",
    country: "Australia",
    imgsrc: "images/person2.jpg",
    imgdescription: "person2"
}, 
{
    name: "Jeanne S.",
    comment: "I had a great experience and am very happy with the items of clothing made.",
    city: "Paris",
    country: "France",
    imgsrc: "images/person3.jpg",
    imgdescription: "person3"
}, 
{
    name: "Patrick C.",
    comment: "I received the package today. Thank you. I tried the pants on with my new braces. The pants are beautifully done and fit perfectly. Congratulations on the excellent tailoring your team accomplished",
    city: "New York",
    country: "USA",
    imgsrc: "images/person4.jpg",
    imgdescription: "person4"
}, 
{
    name: "Emily D.",
    comment: "The jacket is absolutely fantastic - perfect fit, incredible fabric and looks amazing!",
    city: "Berlin",
    country: "Germany",
    imgsrc: "images/person5.jpg",
    imgdescription: "person5"
}, 
{
    name: "Gracyanne B.",
    comment: "I just [...] tried all, it was a great fit, thank you for your good and quick work, much appreciated!",
    city: "Sao Paulo",
    country: "Brasil",
    imgsrc: "images/person6.jpg",
    imgdescription: "person6"
}];
const hamburgerBtn = document.querySelector(".icon-menu-mobile img");
const crossBtn = document.querySelector('.cross img');
const showMoreBtn = document.querySelector('.testimonial-btn button');
const mobileMenu = document.querySelector(".nav-mobile");
const mobileMenuElements = document.querySelectorAll(".nav-mobile .container li");
const testimonialContainer = document.querySelector('.testimonial-container');
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    hamburgerBtn.style.display = 'none';
});
crossBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block';
});

mobileMenuElements.forEach((menuElement) => {
    menuElement.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        hamburgerBtn.style.display = 'block';
    })
})
let content = ``;
testimonialObjs.forEach((testimonialObj) => {
   content += `<div class="testimonial-card">
   <div class="testimonial-image">
       <img src="${testimonialObj.imgsrc}" alt="${testimonialObj.imgdescription}">
   </div>
   <div class="testimonial-content">
       <h2>${testimonialObj.name}</h2>
       <h4>"${testimonialObj.comment}"
       </h4>
       <hr>
       <p>From ${testimonialObj.city}, ${testimonialObj.country}</p>
   </div>
</div>`
});

testimonialContainer.innerHTML += content;
const testimonials = document.querySelectorAll(".testimonial-card");
if (showMoreBtn !== null) {
    showMoreBtn.addEventListener('click', () => {
        testimonials.forEach((testimonial, index) => {
            if (index > 1) {
                if (window.getComputedStyle(testimonial).display === "none") {
                    testimonial.style.display = 'flex';
                } else {
                    testimonial.style.display = 'none';
                }
            }

        })
        if (testimonials[2].style.display === 'none') {
            showMoreBtn.innerHTML = `More <img src="images/icons/down-arrow.svg" alt="down icon">`;
        } else {
            showMoreBtn.innerHTML = `Less <img src="images/icons/up-arrow.svg" alt="down icon">`;
        }
    });
}
