export const dropdownActivate = () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    const declOfNum = (n, text_forms) => {  
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    };

    const changeValueOfDropdown = (dropdown) => {
        let dropdownButton = dropdown.querySelector('.dropdown__button'),
            dropdownButtonText = dropdownButton.querySelector('.dropdown__button__text'),
            dropdownItems = [...dropdown.querySelectorAll('input[type="number"]')];
                
        let counts = {};
        dropdownItems.forEach(item => {
            if (counts[item.dataset.forms])
                counts[item.dataset.forms] += +item.value;
            else 
                counts[item.dataset.forms] = +item.value;
        });

        let str = '';
        for (let key in counts) {
            if (str)
                str += `${counts[key] != 0 ? `, ${counts[key]} ${declOfNum(counts[key], key.split(', '))}` : ''}`;
            else 
                str = `${counts[key] != 0 ? `${counts[key]} ${declOfNum(counts[key], key.split(', '))}` : ''}`;
        }

        dropdownButtonText.textContent = str ? str : dropdownButton.dataset.initialValue;
    };

    dropdowns.forEach(dropdown => {
        changeValueOfDropdown(dropdown);
    });

    // Проверка равняется ли value у Input равным max или min. Для подсвечивания или затемнения кнопок + и -
    const countDigit = document.querySelectorAll('.dropdown__count-digit');

    countDigit.forEach(input => {
        if ( input.value <= input.getAttribute('min')) {
            input.parentNode.querySelector('.dropdown__button-minus').style.opacity = 0.5;
        } else {
            input.parentNode.querySelector('.dropdown__button-minus').style.opacity = 1;
        } 

        if (input.value >= +input.getAttribute('max')) {
            input.parentNode.querySelector('.dropdown__button-plus').style.opacity = 0.5;
        }
    });

    const openDropdown = (e) => {
        let target = e.target;

        if (!target.closest('.dropdown') ||
            target.classList.contains('dropdown__button-solution_confirm')) 
        {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('dropdown_extended');

                changeValueOfDropdown(dropdown);
            })
            return;
        }

        if (target.closest('.dropdown_extended > .dropdown__button') ||
            target.classList.contains('dropdown__button-solution_confirm')) 
        {
            target.closest('.dropdown').classList.remove('dropdown_extended');
            
        } else {
            target.closest('.dropdown').classList.add('dropdown_extended');
        }
    };

    const changeValueOfCountDigit = (e) => {
        let target = e.target;
        let clearButton = document.querySelector('.dropdown__button-solution_cancel');

        if (!target.classList.contains('dropdown__button-minus') && 
            !target.classList.contains('dropdown__button-plus') &&
            !target.classList.contains('dropdown__button-solution_cancel')) 
        {
            return;
        }

        if (target.classList.contains('dropdown__button-minus')) 
        {
            let digit = target.parentNode.querySelector('.dropdown__count-digit');
            digit.value--;

            if (digit.value <= +digit.getAttribute('min')) 
            {
                clearButton.style.opacity = 0;
                clearButton.style.pointerEvents = 'none';
                digit.value = digit.getAttribute('min');
                target.style.opacity = 0.5;
            } else 
            {
                clearButton.style.opacity = 1;
                clearButton.style.pointerEvents = 'auto';
                target.style.opacity = 1;
                target.parentNode.querySelector('.dropdown__button-plus').style.opacity = 1;
            }
        } 
        else if (target.classList.contains('dropdown__button-plus')) 
        {
            let digit = target.parentNode.querySelector('.dropdown__count-digit');
            digit.value++;

            if (digit.value >= +digit.getAttribute('max'))
            {
                digit.value = digit.getAttribute('max');
                target.style.opacity = 0.5;
            } 
            else 
            {
                clearButton.style.opacity = 1;
                clearButton.style.pointerEvents = 'auto';
                target.style.opacity = 1;
                target.parentNode.querySelector('.dropdown__button-minus').style.opacity = 1;
            }
        } 
        else if (target.classList.contains('dropdown__button-solution_cancel')) 
        {
            let dropdown = target.closest('.dropdown'),
                dropdownButton = dropdown.querySelector('.dropdown__button'),
                dropdownButtonText = dropdownButton.querySelector('.dropdown__button__text');

            dropdownButtonText.textContent = dropdownButton.dataset.initialValue;
            clearButton.style.opacity = 0;
            clearButton.style.pointerEvents = 'none';
            dropdown.querySelectorAll('.dropdown__count-digit').forEach(input => input.value = 0);
            dropdown.querySelectorAll('.dropdown__button-minus').forEach(button => button.style.opacity = 0.5)
        }
    };

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', changeValueOfCountDigit)
    });
    window.addEventListener('click', openDropdown);
};
