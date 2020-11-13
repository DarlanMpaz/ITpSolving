//SHOW MODAL
    const icon_menu = document.querySelector('#menu-button');
    const modal = document.querySelector('#modal');
    modal.classList.add('hidden');
    icon_menu.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    });
//END SHOW MODAL

//HIDE MODAL
    const icon_close_menu = document.querySelector('#close-button').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
//END HIDE MODAL
