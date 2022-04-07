const mobileNav_button = document.querySelector('.mobile-nav-button');
const mobileNav_div = document.querySelector('.primary-navigation');

mobileNav_button.addEventListener('click', ()=>{
    const VisiblityStt = mobileNav_div.getAttribute("data-visible")
    
    if(VisiblityStt === "false"){
        mobileNav_div.setAttribute("data-visible", true)
        mobileNav_button.style.backgroundImage = 'url(./assets/shared/icon-close.svg)';
    }
    else{
        mobileNav_div.setAttribute("data-visible", false)
        mobileNav_button.style.backgroundImage = 'url(./assets/shared/icon-hamburger.svg)';
    }
});





/*let controle = 1;

mobilenav_button.forEach(function(item){
    item.addEventListener('click', (e)=>{
        navMenu_div.forEach(function(elem){

            if(controle == 0){
                elem.style.display ='none';
                controle = 1;
            }
            else{
                elem.style.display ='block';
                controle = 0;
            }
        })
    })
});*/