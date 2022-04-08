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

//Destination Script

/*
Quando um dos botões do tab list for apertado, 
o conteúdo respectivo daquele botão irá aparecer na tela, além disso,
o botão terá um highlight embaixo do botão.
*/

const tabMoon_button = document.querySelector('.moon-button');
const descriptionDestination = document.querySelector('.destination-description');

const tabMars_button = document.querySelector('.mars-button');
const tabEuropa_button = document.querySelector('.europa-button');
const tabTitan_button = document.querySelector('.titan-button');

const distanceDetails_p = document.querySelector('.distance-details');
const travelTimeDetails_p = document.querySelector('.travel-time-details');

const destinationTitle_div = document.querySelector('h2');

const destinationImage = document.querySelector('.image-destination')

tabMoon_button.addEventListener('click', ()=>{
    addHighlight('moon');
    changeContent('moon')
});

tabMars_button.addEventListener('click', ()=>{
    addHighlight('mars');
    changeContent('mars')
});

tabEuropa_button.addEventListener('click', ()=>{
    addHighlight('europa');
    changeContent('europa')
});

tabTitan_button.addEventListener('click', ()=>{
    addHighlight('titan');
    changeContent('titan')
});

//Function to change the content of the page.
function changeContent(destination){
    switch(destination){
        case 'moon':
            destinationTitle_div.innerText = 'moon';
            descriptionDestination.innerText = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
            distanceDetails_p.innerText = "384,400 km";
            travelTimeDetails_p.innerText = "3 days";
            destinationImage.src = "./assets/destination/image-moon.png";
            break;

        case 'mars':
            destinationTitle_div.innerText = 'mars';
            descriptionDestination.innerText = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
            distanceDetails_p.innerText = "225 mil. km";
            travelTimeDetails_p.innerText = "9 months";
            destinationImage.src = "./assets/destination/image-mars.png";
            break;

        case 'europa':
            destinationTitle_div.innerText = 'europa';
            descriptionDestination.innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
            distanceDetails_p.innerText = "628 mil. km";
            travelTimeDetails_p.innerText = "3 years";
            destinationImage.src = "./assets/destination/image-europa.png";
            break;

        case 'titan':
            destinationTitle_div.innerText = 'titan';
            descriptionDestination.innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
            distanceDetails_p.innerText = "1.6 bil. km";
            travelTimeDetails_p.innerText = "7 years";
            destinationImage.src = "./assets/destination/image-titan.png";
            break;
    }
}

//Function to highlight the selected buttom.
function addHighlight(button){
    switch(button){
        case 'moon':
            tabMoon_button.classList.add('active');
            tabMars_button.classList.remove('active');
            tabEuropa_button.classList.remove('active');
            tabTitan_button.classList.remove('active');
            break;

        case 'mars':
            tabMars_button.classList.add('active');
            tabMoon_button.classList.remove('active');
            tabEuropa_button.classList.remove('active');
            tabTitan_button.classList.remove('active');
            break;

        case 'europa':
            tabEuropa_button.classList.add('active');
            tabMoon_button.classList.remove('active');
            tabMars_button.classList.remove('active');
            tabTitan_button.classList.remove('active');
            break;

        case 'titan':
            tabTitan_button.classList.add('active');
            tabMoon_button.classList.remove('active');
            tabMars_button.classList.remove('active');
            tabEuropa_button.classList.remove('active');
            break;
    }
}