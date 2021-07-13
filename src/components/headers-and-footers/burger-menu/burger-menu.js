export const burgerMenuActivate = () => {
    const burgerBtn = document.querySelector('.header__burger');
    const burgerMenu = document.querySelector('.burger-menu');

    const openBurgerMenu = (e) => {
        let target = e.target;

        if (target == burgerBtn) 
            burgerMenu.style.display = 'flex';
        else if (!target.closest('.burger-menu__block') || target.matches('.burger-menu__link, .button, .burger-menu__close-btn'))
            burgerMenu.style.display = 'none';
    };

    document.addEventListener('click', openBurgerMenu);
};