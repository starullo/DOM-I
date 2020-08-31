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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const nav = document.querySelectorAll('header nav a');
for (let i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  nav[i].href = '#' + siteContent.nav[`nav-item-${i + 1}`];
  nav[i].style.color = 'green';
};
const pictures = document.createElement('a');
pictures.textContent = 'Pictures';
pictures.style.color = 'green';
pictures.setAttribute('href', '#');
const something = document.createElement('a');
something.textContent = 'Something';
something.style.color = 'green';
something.setAttribute('href', '#');
const navBar = document.querySelector('header nav');
navBar.prepend(pictures);
navBar.appendChild(something);

const h1 = document.querySelector('h1');
h1.innerHTML = siteContent.cta.h1.split(' ').join('<br>');

const img1 = document.querySelector('#cta-img');
img1.src = 'img/header-img.png';


const button = document.querySelector('.cta-text button');
button.textContent = "Get Started";

const featuresH4 = document.querySelector('.top-content div:first-of-type h4');
featuresH4.textContent = siteContent["main-content"]["features-h4"];
const featuresContent = document.querySelector('.top-content div:first-of-type p');
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector('.top-content div:last-of-type h4');
aboutH4.textContent = siteContent["main-content"]["about-h4"];
const aboutContent = document.querySelector('.top-content div:last-of-type p');
aboutContent.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.querySelector('.middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

const servicesH4 = document.querySelector('.bottom-content div:first-of-type h4');
servicesH4.textContent = siteContent["main-content"]["services-h4"];
const servicesContent = document.querySelector('.bottom-content div:first-of-type p');
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelector('.bottom-content div:nth-of-type(2) h4');
productH4.textContent = siteContent["main-content"]["product-h4"];
const productContent = document.querySelector('.bottom-content div:nth-of-type(2) p');
productContent.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelector('.bottom-content div:last-of-type h4');
visionH4.textContent = siteContent["main-content"]["vision-h4"];
const visionContent = document.querySelector('.bottom-content div:last-of-type p');
visionContent.textContent = siteContent["main-content"]["vision-content"];

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];
const contactAddress = document.querySelector('.contact p:first-of-type');
contactAddress.textContent = siteContent.contact.address;
const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent.contact.phone;
const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent.contact.email;

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

/* STRETCH */
const newButton = document.createElement('button');
newButton.style.width = '100px';
newButton.style.height = '50px';
newButton.style.padding = '10%';
newButton.style.margin = '15%';
newButton.textContent = 'Click here to change something'
const main = document.querySelector('.main-content');
main.appendChild(newButton);
newButton.onclick = change;

function change() {
  let item = prompt('Please type in which section of page you would like to update (ex: "services" or "product")');
  let change = prompt('please type in what you would like the section to display');
  switch(item.toLowerCase()) {
    case 'features':
      featuresContent.textContent = change;
      break;
    case 'about':
      aboutContent.textContent = change;
      break;
    case 'services':
      servicesContent.textContent = change;
      break;
    case 'product':
      productContent.textContent = change;
      break;
    case 'vision':
      visionContent.textContent = change;

  }
}
