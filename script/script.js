//Overlay hide

const menuIcon = document.querySelector(".menu__icon")
const overlayMenu = document.querySelector(".overlayMenu")
const modalMenu = document.querySelector(".modalMenu")
const menuh3 =  document.querySelectorAll(".menu__list__item h3")

var closedMenu = true;

//animation hamburgher menù
document.querySelector(".menu__icon").addEventListener("click", () => {
    if (closedMenu === true) {
        closedMenu = false;
        overlayMenu.classList.add("open")
        modalMenu.classList.add("open")
        menuh3.forEach(h3 => {
            h3.classList.add("white")
        });
    } else {
        closedMenu = true
        modalMenu.classList.add("closing")
        overlayMenu.classList.add("closing")

        setTimeout(() => {
            modalMenu.classList.remove("closing")
            overlayMenu.classList.remove("closing")
            overlayMenu.classList.remove("open")
            modalMenu.classList.remove("open")
        }, 300);

    }

})