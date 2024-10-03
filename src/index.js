// index.js
import "./styles.css";
import header from "./header.js";
import home from "./home.js";


document.body.appendChild(header);

const main = document.createElement("main");
main.appendChild(home);

document.body.appendChild(main);

export default main;