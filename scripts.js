document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle'); // Add a button for toggling

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            const bookBox = this.closest('.book-box');
            const effect = bookBox.querySelector('.particle-effect');

            effect.style.display = 'block';
            // Create particles
            for (let i = 0; i < 30; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                effect.appendChild(particle);

                // Randomize particle position
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                // Remove particle after animation
                setTimeout(() => {
                    particle.remove();
                }, 1000); // Match duration with animation
            }

            // Hide effect after animation
            setTimeout(() => {
                effect.style.display = 'none';
            }, 1000); // Match duration with animation
        });
    });
});