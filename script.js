document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');

    dropdownBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle('show');
        this.classList.toggle('active');
    });
});

