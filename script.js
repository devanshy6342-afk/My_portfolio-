const projectsBtn = document.getElementById("projectsBtn");
projectsBtn.addEventListener("click",function() {
    console.log("Projects button clicked!");
    projectsTitle.textContent = "My Projects 🚀";
});
const projectsTitle=document.getElementById("projectsTitle");
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit",function(event){
    event.preventDefault();

  
document.getElementById("formMessage").textContent =
           "Message submitted successfully!";
    contactForm.reset();
});
const nav = 
document.querySelector("nav");
const menuBtn =
document.getElementById("menuBtn");
menuBtn.addEventListener("click",function() {
    nav.classList.toggle("menu-open");
});