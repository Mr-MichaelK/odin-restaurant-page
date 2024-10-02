// header.js
import ChicksLogoSRC from "./images/Chicks-Restaurant.jpeg";

const ChicksLogo     = document.createElement("img");
ChicksLogo.src       = ChicksLogoSRC;
ChicksLogo.className = "chickslogo"

const textBox = document.createElement("p");
textBox.className = "textBox";
textBox.textContent = "I'm Only Into";

const box = document.createElement("div");
box.className = "headerBox";
box.appendChild(textBox);
box.appendChild(ChicksLogo);

const header = document.createElement("header");
header.appendChild(box);

const nav = document.createElement("nav");

const home    = document.createElement("button");
const menu    = document.createElement("button");
const contact = document.createElement("button");

home.textContent    = "Home";
menu.textContent    = "Menu";
contact.textContent = "Contact";

// TODO: add event listeners

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);

header.appendChild(nav);

export default header;