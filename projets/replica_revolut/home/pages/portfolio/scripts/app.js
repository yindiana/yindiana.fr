const allSections = document.querySelector(".main-content");  //body
const sections = document.querySelectorAll(".section");  //header + main
const sectBtns = document.querySelectorAll(".controls");    //conteneur des btns de navigation
const sectBtn = document.querySelectorAll(".control");  //btn de navigation

function PageTransitions(){
    //activation of nav buttons
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //link beetwen selected nav button & section by id/data-id
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove active from all btn & active the selected btn by id
            sectBtn.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active');

            //hide all sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            //show the selected section by id
            const element = document.getElementById(id)
            element.classList.add('active');
        }
    })

    //dark-light theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')  //on toggle light-mode class is add/remove to body
    })
}
PageTransitions();