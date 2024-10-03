const table = document.createElement("div");

table.className = "contentTable";

const h1 = document.createElement("h1");
h1.textContent = "Chicks Restaurant"

const h2 = document.createElement("h2");
h2.textContent = "\"Taste is of the Essence\"";

const title = document.createElement("div");
title.className = "title";

title.appendChild(h1);
title.appendChild(h2);

table.appendChild(title);

const contactSubbox = document.createElement("div");
contactSubbox.className = "subbox";

const contactTitle = document.createElement("h1");
contactTitle.textContent = "Contact Information:";

const contactsBox = document.createElement("div");
contactsBox.className = "contactsBox";
contactsBox.style.paddingLeft = "4rem";

const linkedin = document.createElement("div");
linkedin.innerHTML = "<p><b><u>LinkedIn:</u></b> N/A</p>";

const email = document.createElement("div");
email.innerHTML = "<p><b><u>Email:</u></b> <a href=\"mailto:michael1kolanjian2@gmail.com\">michael1kolanjian2@gmail.com</a></p>";

const phone = document.createElement("div");
phone.innerHTML = "<p><b><u>Phone:</u></b> +961 76 868 365</p>";

const github = document.createElement("div");
github.innerHTML = "<p><b><u>GitHub:</u></b> <a href=\"https://github.com/Mr-MichaelK\">@Mr-MichaelK</a></p>";

contactsBox.appendChild(linkedin);
contactsBox.appendChild(email);
contactsBox.appendChild(phone);
contactsBox.appendChild(github);

contactSubbox.appendChild(contactTitle);
contactSubbox.appendChild(contactsBox);

table.appendChild(contactSubbox);

export default table;