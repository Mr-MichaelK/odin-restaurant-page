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

const missionSubbox = document.createElement("div")
missionSubbox.className = "subbox";

const missionTitle = document.createElement("h1");
missionTitle.textContent = "Mission:";

const missionText = document.createElement("p");
missionText.textContent = "We aim to delight our customers with expertly crafted chicken dishes, from crispy fried to perfectly grilled, preserving the sacred experience of great taste.";

missionSubbox.appendChild(missionTitle);
missionSubbox.appendChild(missionText);

table.appendChild(missionSubbox);

const hourSubbox = document.createElement("div");
hourSubbox.className = "subbox";

const hourTitle = document.createElement("h1");
hourTitle.textContent = "Hours:";

const hourText = document.createElement("p");
hourText.innerHTML = "We are open on:<br>";

const hourText2 = document.createElement("p");
hourText2.innerHTML = "Mondays: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12PM - 10PM<br>Tuesdays: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12PM - 10PM<br>Wednesdays: 12PM - 10PM<br>Thursdays: &nbsp;&nbsp;12PM - 10PM<br>Fridays: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12PM - 12AM<br>Saturdays: &nbsp;&nbsp;12PM - 12AM";

hourText2.style.fontWeight = "bold";

hourSubbox.appendChild(hourTitle);
hourSubbox.appendChild(hourText);
hourSubbox.appendChild(hourText2);

table.appendChild(hourSubbox);

const locationSubbox = document.createElement("div");
locationSubbox.className = "subbox";

const locationTitle = document.createElement("h1");
locationTitle.textContent = "Location:";

const locationText = document.createElement("p");
locationText.innerHTML = "Visit us at \"86 Some Street, Some City, Some Country\".<br>We'll be expecting you soon!";

locationSubbox.appendChild(locationTitle);
locationSubbox.appendChild(locationText);

table.appendChild(locationSubbox);

export default table;