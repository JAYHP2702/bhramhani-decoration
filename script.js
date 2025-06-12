document.addEventListener('DOMContentLoaded', function() {
// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', function() {
if (window.scrollY > 50) {
header.classList.add('bg-white', 'shadow-md');
header.classList.remove('bg-opacity-95');
} else {
header.classList.remove('shadow-md');
header.classList.add('bg-opacity-95');
}
});
// Portfolio filtering
const filterButtons = document.querySelectorAll('[id^="portfolio-filter-"]');
const portfolioItems = document.querySelectorAll('.gallery-item');
function filterPortfolio(category) {
portfolioItems.forEach(item => {
if (category === 'all' || item.dataset.category === category) {
item.style.display = 'block';
} else {
item.style.display = 'none';
}
});
}
filterButtons.forEach(button => {
button.addEventListener('click', function() {
// Remove active class from all buttons
filterButtons.forEach(btn => {
btn.classList.remove('bg-primary', 'text-white');
btn.classList.add('text-gray-700', 'hover:bg-gray-200');
});
// Add active class to clicked button
this.classList.remove('text-gray-700', 'hover:bg-gray-200');
this.classList.add('bg-primary', 'text-white');
// Filter portfolio items
const category = this.dataset.category;
filterPortfolio(category);
});
});
});