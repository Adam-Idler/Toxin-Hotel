export const likeBtn = () => {
    const likeBtns = document.querySelectorAll('.like-button');

    likeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('like-button_liked')) {
                btn.querySelector('.like-button__count').textContent--;
                btn.classList.remove('like-button_liked');
            } else {
                btn.querySelector('.like-button__count').textContent++;
                btn.classList.add('like-button_liked');
            }
        });
    });
};