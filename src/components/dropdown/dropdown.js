export const dropdownActivate = () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    const openDropdown = (e) => {
        let target = e.target;

        if (!target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown_extended');
            })
            return;
        }
        
        if (target.closest('.dropdown_extended > .dropdown__button')) {
            target.parentNode.classList.remove('dropdown_extended');
        } else {
            target.parentNode.classList.add('dropdown_extended');
        }
    };

    const changeValue = (e) => {
        let target = e.target;

        if (!target.classList.contains('dropdown__button-minus') && !target.classList.contains('dropdown__button-plus')) {
            return;
        }

        if (target.classList.contains('dropdown__button-minus')) {
            target.parentNode.querySelector('.dropdown__count-digit').value--

            if (target.parentNode.querySelector('.dropdown__count-digit').value < 0) {
                target.parentNode.querySelector('.dropdown__count-digit').value = 0
            } 
        } else if (target.classList.contains('dropdown__button-plus')) {
            target.parentNode.querySelector('.dropdown__count-digit').value++

            if (target.parentNode.querySelector('.dropdown__count-digit').value > 10) {
                target.parentNode.querySelector('.dropdown__count-digit').value = 10
            } 
        }
    }


    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', changeValue)
    })
    window.addEventListener('click', openDropdown);
};