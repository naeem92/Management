// Nav link 
const openButton = document.querySelector(".open");
const closeButton = document.querySelector(".close");
const links = document.querySelector(".nav-links");

openButton.addEventListener("click", () => {
  openButton.classList.add("hidden");
  openButton.classList.remove("show");

  closeButton.classList.add("show");
  closeButton.classList.remove("hidden");

  links.classList.add("mobile-links");
});
closeButton.addEventListener("click", () => {
  closeButton.classList.add("hidden");
  closeButton.classList.remove("show");

  openButton.classList.add("show");
  openButton.classList.remove("hidden");

  links.classList.remove("mobile-links");
});

// FAQ section 
let currentOpenFaq = null;

function toggleAnswer(id) {
  const faqItem = document.getElementById(id);
  const answer = faqItem.querySelector('.answer');
  const icon = faqItem.querySelector('.toggle-icon');

  if (currentOpenFaq && currentOpenFaq !== faqItem) {
    currentOpenFaq.querySelector('.answer').style.display = "none";
    currentOpenFaq.querySelector('.toggle-icon').classList.remove('rotate');
  }

  answer.style.display = answer.style.display === "block" ? "none" : "block";
  icon.classList.toggle('rotate', answer.style.display === "block");
  currentOpenFaq = answer.style.display === "block" ? faqItem : null;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.answer').forEach(answer => answer.style.display = "none");
  document.querySelectorAll('.toggle-icon').forEach(icon => icon.classList.remove('rotate'));
});

// Nav links Smooth Scroll 
const navLinks = document.querySelectorAll('.nav-links a');

        // Add click event listener for each link
        navLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default anchor behavior

                const targetSection = document.querySelector(this.getAttribute('data-target'));

                setTimeout(() => {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }, 50); 
            });
        });