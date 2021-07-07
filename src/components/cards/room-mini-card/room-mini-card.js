export const sliderActivate = () => {
    
    const sliders = document.querySelectorAll('.room-mini-card__slider');
    
    const sliderStart = (slider) => {
        const slides = slider.querySelectorAll('.room-mini-card__slider__img'),
              dotUl = slider.querySelector('.room-mini-card__slider__pagination'),
              dots = dotUl.querySelectorAll('.room-mini-card__slider__pagination__dot');

        slides[0].classList.add('room-mini-card__slider__img_active');
        dots[0].classList.add('room-mini-card__slider__pagination__dot_active');

        let currentSlide = 0,
            interval;
        const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
        const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

        slider.addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;

            if (!target.matches('.room-mini-card__slider__arrow, .room-mini-card__slider__pagination__dot')) return;

            prevSlide(slides, currentSlide, 'room-mini-card__slider__img_active');
            prevSlide(dots, currentSlide, 'room-mini-card__slider__pagination__dot_active');

            if (target.matches('.room-mini-card__slider__arrow_right')) {
                currentSlide++;
            } else if (target.matches('.room-mini-card__slider__arrow_left')) {
                currentSlide--;
            } else if(target.matches('.room-mini-card__slider__pagination__dot')) {
                dots.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slides.length) currentSlide = 0;
            if (currentSlide < 0) currentSlide = slides.length - 1;

            nextSlide(dots, currentSlide, 'room-mini-card__slider__pagination__dot_active');
            nextSlide(slides, currentSlide, 'room-mini-card__slider__img_active');
        });
    };
    
    sliders.forEach(slider => {
        sliderStart(slider)
    });
};