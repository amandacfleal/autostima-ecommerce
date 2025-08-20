 document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuButton = document.querySelector('button[class*="md:hidden"]');
            const newsletterForm = document.getElementById('newsletter-form');

            if (mobileMenuButton) {
                mobileMenuButton.addEventListener('click', function() {
                    const nav = document.querySelector('nav[class*="hidden md:flex"]');
                    if (nav) {
                        nav.classList.toggle('hidden');
                        nav.classList.add('flex', 'flex-col', 'absolute', 'top-16', 'left-0', 'right-0', 'bg-white', 'p-4', 'space-y-4');
                    }
                });
            }

            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const emailInput = this.querySelector('input[type="email"]');
                    if (emailInput.value) {
                        console.log('Obrigado por se cadastrar! Você receberá nossas melhores ofertas em breve.');
                        emailInput.value = '';
                    }
                });
            }

            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    const button = this.querySelector('button');
                    if (button) button.classList.remove('opacity-0');
                });
                card.addEventListener('mouseleave', function() {
                    const button = this.querySelector('button');
                    if (button) button.classList.add('opacity-0');
                });
            });
        });