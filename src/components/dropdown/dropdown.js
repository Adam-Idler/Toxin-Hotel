export const dropdownActivate = () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    const declOfNum = (n, text_forms) => {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    };

    const openDropdown = (e) => {
        let target = e.target;

        if (!target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown_extended');
                let dropdownButton = dropdown.querySelector('.dropdown__button'),
                    dropdownButtonText = dropdownButton.querySelector('.dropdown__button__text');

                if (dropdownButton.dataset.type != '') {
                    let bedroomsCount = dropdown.querySelectorAll('.dropdown__count-digit')[0].value,
                        bedsCount = dropdown.querySelectorAll('.dropdown__count-digit')[1].value,
                        bathroomsCount = dropdown.querySelectorAll('.dropdown__count-digit')[2].value;

                    if (bedroomsCount != 0 || bedsCount != 0 || bathroomsCount != 0) {
                        dropdownButtonText.textContent = `${bedroomsCount} ${declOfNum(bedroomsCount, ['спальня', 'спальни', 'спалень'])}` +
                                                     `${bedsCount != 0 ? `, ${bedsCount} ${declOfNum(bedsCount, ['кровать', 'кровати', 'кроватей'])}` : ''}` +
                                                     `${bathroomsCount != 0 ? `, ${bathroomsCount} ${declOfNum(bathroomsCount, ['ванная', 'ванные', 'ванных'])}` : ''}`;
                    } else {
                        dropdownButtonText.textContent = dropdownButton.dataset.initialValue;
                    }
                }
            })
            return;
        }
        
        if (target.closest('.dropdown_extended > .dropdown__button') ||
            target.classList.contains('dropdown__button-solution_confirm')) 
        {
            target.closest('.dropdown').classList.remove('dropdown_extended');
            
        } else {
            target.parentNode.classList.add('dropdown_extended');
        }
    };

    const changeValue = (e) => {
        let target = e.target;

        if (!target.classList.contains('dropdown__button-minus') && 
            !target.classList.contains('dropdown__button-plus') &&
            !target.classList.contains('dropdown__button-solution')) 
        {
            return;
        }

        if (target.classList.contains('dropdown__button-minus')) 
        {
            target.parentNode.querySelector('.dropdown__count-digit').value--

            if (target.parentNode.querySelector('.dropdown__count-digit').value <= 0) 
            {
                target.parentNode.querySelector('.dropdown__count-digit').value = 0
                target.style.opacity = 0.5;
            } else 
            {
                target.style.opacity = 1;
                target.parentNode.querySelector('.dropdown__button-plus').style.opacity = 1;
            }
        } 
        else if (target.classList.contains('dropdown__button-plus')) 
        {
            target.parentNode.querySelector('.dropdown__count-digit').value++

            if (target.parentNode.querySelector('.dropdown__count-digit').value >= 10)
            {
                target.parentNode.querySelector('.dropdown__count-digit').value = 10
                target.style.opacity = 0.5;
            } 
            else 
            {
                target.style.opacity = 1;
                target.parentNode.querySelector('.dropdown__button-minus').style.opacity = 1;
            }
        } 
        else if (target.classList.contains('dropdown__button-solution')) 
        {
            let dropdown = target.closest('.dropdown'),
                dropdownButtonText = dropdown.querySelector('.dropdown__button__text');

            if (target.classList.contains('dropdown__button-solution_cancel')) 
            {
                dropdown.querySelectorAll('.dropdown__count-digit').forEach(input => input.value = 0);
                dropdownButtonText.textContent = dropdownButtonText.dataset.initialValue;
                dropdown.querySelectorAll('.dropdown__button-minus').forEach(button => button.style.opacity = 0.5)
            } 
            else if (target.classList.contains('dropdown__button-solution_confirm')) 
            {
                let guestsArray = [...dropdown.querySelectorAll('.dropdown__count-digit')].map(input => +input.value);
                let babiesCount = dropdown.querySelectorAll('.dropdown__count-digit')[guestsArray.length - 1].value

                let guestsCount = guestsArray.reduce((sum, current) => sum + current, 0) - babiesCount;
                dropdownButtonText.textContent = `${guestsCount} ${declOfNum(guestsCount, ['гость', 'гостя', 'гостей'])}` + 
                                             `${babiesCount != 0 ? `, ${babiesCount} ${declOfNum(babiesCount, ['младенец', 'младенца', 'младенцев'])}` : ''}`;
            }
        }
    };

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', changeValue)
    });
    window.addEventListener('click', openDropdown);
};
