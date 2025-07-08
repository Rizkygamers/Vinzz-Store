// AOS init
AOS.init({
  duration: 1000,
  once: true
});

// Ketik efek buat heading
const text = "Selamat Datang di Vinzz Store!";
const target = document.querySelector("h1");
let i = 0;

function typeEffect() {
  if (i < text.length) {
    target.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 60);
  }
}

target.innerHTML = ""; // Kosongin dulu
typeEffect(); // Start efek ketik

// Redirect ke halaman menu
function goToMenu() {
  window.location.href = "store.html";
  window.location.href = "store.html";
}

// Load Particles.js
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": { "value": "#ffffff" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.3,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "out_mode": "bounce"
    }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 100 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});