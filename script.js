// Typing animation
const typingText = "Web Developer 💻";
const typingElement = document.querySelector("h2");

let i = 0;
function typeEffect() {
  if (i < typingText.length) {
    typingElement.textContent += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;

// Show specific section
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Go back to home
function goHome() {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById("home").classList.add("active");
}
