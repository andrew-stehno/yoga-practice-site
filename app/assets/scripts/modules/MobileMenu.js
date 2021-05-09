class MobileMenu {
    constructor() {
        document.addEventListener("click", () => {document.querySelector(".site-header__menu-icon");
        document.querySelector(".site-header__menu-content").classList.toggle("site-header__menu-content--is-visible");
    })

        // this.menuIcon = document.querySelector(".site-header__menu-icon")
        // this.menuContent = document.querySelector(".site-header__menu-content")
        // this.events()
    }

    // events() {
    //     this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
    // }

    // toggleTheMenu() {
    //     this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    // }
 
}

export default MobileMenu;