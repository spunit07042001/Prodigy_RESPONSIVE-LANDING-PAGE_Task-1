// Select the navbar
const navbar = document.getElementById('navbar');

// Function to add or remove the scrolled class based on scroll position
window.onscroll = function () {
    if (window.scrollY > 50) { // Adjust this value as needed
        navbar.style.backgroundColor = '#000'; // Change background color on scroll
    } else {
        navbar.style.backgroundColor = '#333'; // Revert back to initial background color
    }
};
