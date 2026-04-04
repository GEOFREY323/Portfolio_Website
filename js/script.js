
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

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(() => {
    alert("Message sent successfully!");
  });
});