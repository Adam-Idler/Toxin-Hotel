export const filterButton = () => {
    const filterBtn = document.querySelector('.search-room__btn-filter'),
          closeBtn = document.querySelector('.aside__close-btn'),
          aside = document.querySelector('.search-room__aside_mobile'),
          section = document.querySelector('.search-room__section');
    

    const openAside = () => {
        aside.classList.add('search-room__aside_mobile_shown');
        section.style.display = 'none';
    }

    const closeAside = () => {
        aside.classList.remove('search-room__aside_mobile_shown');
        section.style.display = 'block';
    }

    filterBtn.addEventListener('click', openAside);
    closeBtn.addEventListener('click', closeAside);
};