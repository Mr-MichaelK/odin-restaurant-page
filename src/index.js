// index.js
import "./styles.css";
import header from "./header.js";
import menu from "./menu.js";
import contact from "./contact.js";
import home from "./home.js";


document.body.appendChild(header);

const main = document.createElement("main");
main.appendChild(menu);

document.body.appendChild(main);