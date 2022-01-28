class MobileNavBar {
    constructor(menuMobile, menuLista, menuLinks) {
        this.menuMobile = document.querySelector(menuMobile)
        this.menuLista = document.querySelector(menuLista);
        this.menuLinks = document.querySelectorAll(menuLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.menuLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5 ease forwards 0.3 ${index / 7 + 0.3}s`);
        });
    }

    handleClick() {
        this.menuLista.classList.toggle(this.activeClass);
        this.menuMobile.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent() {
        this.menuMobile.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.menuMobile) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".menu-mobile",
    ".menu-lista",
    ".menu-lista li",
);
mobileNavBar.init();