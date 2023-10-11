/*variable declaration*/
        /*-----Navbar------*/
        const menuBurger = document.querySelector(".menu_burger")
        const navLink = document.querySelector(".navbar")
        const topBarLink = document.querySelector(".topbar")
        /*-----Newsletter------*/
        // const newsletterButton = document.querySelector(".newsletter_button")
        // const newsletterPopup = document.querySelector(".newsletter_action")

    /*add and delete of .responsive after class navlink & topbarling on menuBurger click*/
        /*-----Navbar------*/
        menuBurger.addEventListener('click',()=>{navLink.classList.toggle('responsive')})
        menuBurger.addEventListener('click',()=>{topBarLink.classList.toggle('responsive')})
        /*-----Newsletter------*/
        // newsletterButton.addEventListener('click',()=>{newsletterPopup.classList.toggle('active')})