export const toggleBtn = () => {
    const switchBtn = document.querySelectorAll('.switch-btn');

    switchBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btn.classList.toggle('switch-btn_on');
        });
    })
};