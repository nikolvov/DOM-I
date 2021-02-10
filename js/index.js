const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Grabbing the nav tag//
let nav = document.querySelectorAll ("nav a");
//Making sure I grabbed nav
console.log(nav);
//Populating nav 
nav[0].textContent = siteContent["nav"] ["nav-item-1"]
nav[1].textContent = siteContent["nav"] ["nav-item-2"]
nav[2].textContent = siteContent["nav"] ["nav-item-3"]
nav[3].textContent = siteContent["nav"] ["nav-item-4"]
nav[4].textContent = siteContent["nav"] ["nav-item-5"]
nav[5].textContent = siteContent["nav"] ["nav-item-6"]
let ctaH1 = document.querySelector (".cta h1")
console.log(ctaH1)

ctaH1.textContent = siteContent ["cta"] ["h1"]
let ctaButton = document.querySelector (".cta button")
console.log(ctaButton)

ctaButton.textContent = siteContent ["cta"] ["button"]
let ctaImg = document.getElementById("cta-img");
console.log(ctaImg)

ctaImg.setAttribute('src', siteContent["cta"]["img-src"])
let mainH4 = document.querySelectorAll (".main-content h4")
console.log(mainH4)

mainH4[0].textContent = siteContent ["main-content"] ["features-h4"]
mainH4[1].textContent = siteContent ["main-content"] ["about-h4"]
mainH4[2].textContent = siteContent ["main-content"] ["services-h4"]
mainH4[3].textContent = siteContent ["main-content"] ["product-h4"]
mainH4[4].textContent = siteContent ["main-content"] ["vision-h4"]
let mainP = document.querySelectorAll (".main-content p")
console.log(mainP)

mainP[0].textContent = siteContent ["main-content"] ["features-content"]
mainP[1].textContent = siteContent ["main-content"] ["about-content"]
mainP[2].textContent = siteContent ["main-content"] ["services-content"]
mainP[3].textContent = siteContent ["main-content"] ["product-content"]
mainP[4].textContent = siteContent ["main-content"] ["vision-content"]
let mainImg = document.getElementById("middle-img");
console.log(mainImg)

mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])
let contact = document.querySelector(".contact h4")
console.log(contact)

contact.textContent = siteContent ["contact"] ["contact-h4"]
let contactP = document.querySelectorAll (".contact p")
console.log(contactP)

contactP[0].textContent = siteContent ["contact"] ["address"]
contactP[1].textContent = siteContent ["contact"] ["phone"]
contactP[2].textContent = siteContent ["contact"] ["email"]
let footer = document.querySelectorAll ("footer p")
console.log(footer)

footer[0].textContent = siteContent ["footer"] ["copyright"]
// let navigation = document.querySelectorAll ('nav a')
console.log(nav)

nav.forEach (aTag => {
  aTag.style.color = 'green'
})

// console.log('nav')

let navEl = document.querySelector('nav')
let subNav = document.createElement('a')
console.log(subNav)

subNav.textContent = 'Team'
subNav.style.color = 'blue'
navEl.appendChild(subNav);
console.log(navEl)

let subNav2 = document.createElement('a')
subNav2.textContent = 'Info'
subNav2.style.color = 'blue'
navEl.prepend(subNav2)

// A faster way to do the nav-items
// For loop
//let nav = document.querySelector("nav");
// let navLinks = nav.children;
// for(var i=0;i<navLinks.length;i++){
//   navLinks[i].innerHTML = siteContent["nav"][`nav-item-${i+1}`];
// }

//Basically you can see that each nav item is numbered so you use the number of each element in a loop to select which nav item content from siteContent you need
// First loop would be i=0, you select nav-item-${i+1} which is nav-item-1, and then on the second item its i=1 so you select nav-item-2
// Uses the idea that each 'nav-item' in siteContent is numbered and loops through the nav adding +1 each time
// The second parameter is i<navLinks.length, and navLinks is 6 long so at 5 it doesn't run another because 0-5 is 6 indices