document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = Array.from(document.querySelectorAll('.slider-item'));
    const totalSlides = slides.length;
    let currentIndex = 0;
    let isTransitioning = false; // Para prevenir cliques rápidos

    function updateSlider() {
        if (isTransitioning) return; // Previne múltiplas animações simultâneas

        isTransitioning = true;
        const offset = -currentIndex * 100;
        sliderContainer.style.transition = 'transform 0.5s ease'; // Adiciona transição
        sliderContainer.style.transform = `translateX(${offset}%)`;

        // Remove a transição após a animação
        setTimeout(() => {
            isTransitioning = false;
            sliderContainer.style.transition = ''; // Remove a transição para futuras atualizações
        }, 500); // Duração da transição (500ms)
    }

    document.querySelector('.slider-btn.next').addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    document.querySelector('.slider-btn.prev').addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    // Navegação com teclado
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') {
            document.querySelector('.slider-btn.next').click();
        } else if (event.key === 'ArrowLeft') {
            document.querySelector('.slider-btn.prev').click();
        }
    });

    // Inicializa o slider
    updateSlider();
});
