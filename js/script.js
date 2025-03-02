// Hamburger menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");

// Event listener untuk hamburger menu
hamburgerMenu.addEventListener("click", (e) => {
  e.preventDefault(); // Mencegah default action dari anchor
  navbarNav.classList.toggle("active");
  
  // Toggle antara ikon hamburger dan ikon X
  if (navbarNav.classList.contains("active")) {
    menuIcon.style.display = "none"; // Sembunyikan ikon hamburger
    closeIcon.style.display = "inline"; // Tampilkan ikon X
  } else {
    menuIcon.style.display = "inline"; // Tampilkan ikon hamburger
    closeIcon.style.display = "none"; // Sembunyikan ikon X
  }
});

// Efek Scroll
const links = document.querySelectorAll('.navbar-nav a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
    
    // Menutup menu setelah memilih link
    navbarNav.classList.remove("active");
    menuIcon.style.display = "inline"; 
    closeIcon.style.display = "none"; 
  });
});

// Menutup Menu pada Klik di Luar
window.addEventListener('click', (e) => {
  if (!navbarNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    navbarNav.classList.remove('active');
    menuIcon.style.display = "inline"; 
    closeIcon.style.display = "none"; 
  }
});

// Menutup Menu dengan Klik pada Ikon X
closeIcon.addEventListener("click", (e) => {
  e.preventDefault(); 
  navbarNav.classList.remove("active");
  menuIcon.style.display = "inline"; 
  closeIcon.style.display = "none"; 
});

