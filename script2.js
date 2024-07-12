document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const sections = document.querySelectorAll('.sub');

    dropdownBtns.forEach(dropdownBtn => {
        const dropdownContent = dropdownBtn.nextElementSibling;
        const dropdownItems = dropdownContent.querySelectorAll('a');

        dropdownBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            dropdownContent.classList.toggle('show');
            this.classList.toggle('active');
        });

        dropdownItems.forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                const targetId = this.getAttribute('data-target');
                const targetSection = document.getElementById(targetId);

                // Hide all sections
                sections.forEach(section => {
                    section.style.display = 'none';
                });

                targetSection.style.display = 'block';
                dropdownItems.forEach(item => {
                    item.classList.remove('active');
                    item.removeAttribute('data-selected');
                });
                this.classList.add('active');
                this.setAttribute('data-selected', 'true');
                dropdownContent.classList.remove('show');
                dropdownBtn.classList.remove('active');
            });
        });
    });
});