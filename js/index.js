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


// Navigation
const navLinks = document.querySelectorAll('a');
navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

navLinks.forEach(link => {
  link.style.color = 'green';
});

const nav = document.querySelector('nav');

const homeLink = document.createElement('a');
homeLink.href = '#';
homeLink.textContent = "Home";
homeLink.style.color = 'green';
nav.prepend(homeLink);

const privacyLink = document.createElement('a');
privacyLink.href = '#';
privacyLink.textContent = "Privacy";
privacyLink.style.color = 'green';
nav.appendChild(privacyLink);

// CTA
const ctaHeading = document.querySelector('.cta-text h1');
ctaHeading.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br>');
ctaHeading.style.color = 'green';

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];
ctaButton.style.background = 'dodgerblue';
ctaButton.style.color = 'white';
ctaButton.style.border = '1px solid dodgerblue';

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// Main Content
const featuresHeading = document.querySelector('.top-content :first-child h4');
featuresHeading.textContent = siteContent["main-content"]["features-h4"];

const featuresContent = document.querySelector('.top-content :first-child p');
featuresContent.textContent = siteContent["main-content"]["features-content"];

const aboutHeading = document.querySelector('.top-content :last-child h4');
aboutHeading.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector('.top-content :last-child p');
aboutContent.textContent = siteContent["main-content"]["about-content"];

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const servicesHeading = document.querySelector('.bottom-content :first-child h4');
servicesHeading.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector('.bottom-content :first-child p');
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productHeading = document.querySelector('.bottom-content :nth-child(2) h4');
productHeading.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector('.bottom-content :nth-child(2) p');
productContent.textContent = siteContent["main-content"]["product-content"];

const visionHeading = document.querySelector('.bottom-content :last-child h4');
visionHeading.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector('.bottom-content :last-child p');
visionContent.textContent = siteContent["main-content"]["vision-content"];

const mainHeadings = document.querySelectorAll('h4');
mainHeadings.forEach(element => element.style.color = 'green');

const mainContent = document.querySelector('.main-content');
mainContent.style.borderTop = '2px solid dodgerblue';
mainContent.style.borderBottom = '2px solid dodgerblue';

const topContent = document.querySelector('.top-content');
topContent.style.background = 'peachpuff';

const bottomContent = document.querySelector('.bottom-content');
bottomContent.style.background = 'pink'

// Contact
const contactHeading = document.querySelector('.contact h4');
contactHeading.textContent = siteContent["contact"]["contact-h4"];

const contactAddress = document.querySelector('.contact :nth-child(2)');
const addressText = siteContent["contact"]["address"];
contactAddress.innerHTML = addressText.slice(0, 18) + '<br>' + addressText.slice(19);

const contactPhone = document.querySelector('.contact :nth-child(3)');
contactPhone.textContent = siteContent["contact"]["phone"];

const contactEmail = document.querySelector('.contact :nth-child(4)');
contactEmail.textContent = siteContent["contact"]["email"];

const contact = document.querySelector('.contact');
contact.style.background = 'thistle';

// Footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent["footer"]["copyright"];
footer.style.background = 'darkseagreen'

// Paragraph style
const pText = document.querySelectorAll('p');
pText.forEach(p => p.style.color = 'midnightblue');