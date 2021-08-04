const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {} else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

let faqsRow = document.querySelectorAll(".faqs-icon");
let arrow = document.querySelectorAll(".chevron");

for (let i = 0; i < faqsRow.length; i++) {
    faqsRow[i].addEventListener("click", () => {
        console.log(faqsRow[i]);
        let focusFaqs = faqsRow[i];
       focusFaqs.classList.toggle("active");
       arrow[i].classList.toggle("arrow-active");

    //    open FAQs answer when title container is clicked
       let text = focusFaqs.nextElementSibling;
        console.log(text);
        if(text.style.display === "block") {
            text.style.display = "none";
        } else {
            text.style.display = "block";
        }
    })
}