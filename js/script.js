
// MOBILE MENU
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// TYPING EFFECT
const texts = [
  'A software developer passionate about building; AI systems, web applications, and data-driven solutions that solve real world problems.',
  "Software Developer",
  "Data Scientist",
  "AI And Machine Learning Enthusiast",
  "Problem Solver"
]

let count = 0;
let index = 0;

function type() {
  let current = texts[count];
  document.getElementById("typing").innerHTML =
    current.substring(0, index);

  index++;

  if (index > current.length) {
    count++;
    index = 0;
    if (count === texts.length) count = 0;
  }

  setTimeout(type, 100);
}

type();

// EMAILJS FORM
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_7ungz1z", "template_4idq45c", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    alert("Message sent successfully!");
  });
});


function nextSlide(btn) {
  const slides = btn.parentElement.querySelectorAll(".slide");
  let index = [...slides].findIndex(s => s.classList.contains("active"));

  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prevSlide(btn) {
  const slides = btn.parentElement.querySelectorAll(".slide");
  let index = [...slides].findIndex(s => s.classList.contains("active"));

  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}