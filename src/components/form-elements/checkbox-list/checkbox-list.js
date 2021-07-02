export const checkboxListActivate = () => {
    const checkboxLists = document.querySelectorAll('.checkbox-list');

    const openCheckboxList = (e) => {
        let target = e.target;
    
        if (!target.closest('.checkbox-list')) 
            return;
        
        if (target.closest('.checkbox-list_extended > .checkbox-list__button')) 
        {
            target.closest('.checkbox-list').classList.remove('checkbox-list_extended');
            
        } else {
            target.closest('.checkbox-list').classList.add('checkbox-list_extended');
        }
    };

    checkboxLists.forEach(checkboxList => {
        checkboxList.addEventListener('click', openCheckboxList);
    });
};

