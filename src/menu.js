class order {
    constructor(name, price, description, location) {
        this.name        = name;
        this.price       = price;
        this.description = description;
        this.location    = location;
        this.displayToDOM();
    }
    displayToDOM() {
        const container = document.createElement("div");
        container.className = "menuContainer";

        const title = document.createElement("h2");
        title.textContent = this.name;

        const price = document.createElement("p");
        price.textContent = "$" + this.price;

        const description = document.createElement("p");
        description.textContent = this.description;

        const temp = document.createElement("div");
        temp.className = "upperContainer";

        temp.appendChild(title);
        temp.appendChild(price);

        container.appendChild(temp);
        container.appendChild(description);

        this.location.appendChild(container);
    }
}

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

// main dishes
const mainDishSection = document.createElement("div");
mainDishSection.className = "section";

const mainDishTitle = document.createElement("h1");
mainDishTitle.textContent = "Main Dishes";

mainDishSection.appendChild(mainDishTitle);

let crispyFriedChicken = new order("Crispy Fried Chicken", 8.99, "Golden-brown chicken fried to perfection, served with a side of your choice and dipping sauce.", mainDishSection);
mainDishSection.appendChild(document.createElement("hr"));
let grilledBBQChicken = new order("Grilled BBQ Chicken", 10.49, "Tender chicken marinated in our house BBQ sauce, flame-grilled and served with fresh vegetables.", mainDishSection);
mainDishSection.appendChild(document.createElement("hr"));
let buffaloChickenWings = new order("Buffalo Chicken Wings", 9.99, "Juicy wings tossed in spicy buffalo sauce, accompanied by celery sticks and blue cheese dip.", mainDishSection);
mainDishSection.appendChild(document.createElement("hr"));
let chickenTenders = new order("Chicken Tenders", 7.99, "Breaded chicken tenders, served with honey mustard or BBQ sauce for dipping.", mainDishSection);
mainDishSection.appendChild(document.createElement("hr"));
let chickenCaesarWrap = new order("Chicken Caesar Wrap", 8.49, "Grilled chicken wrapped in a soft tortilla with Caesar dressing, romaine lettuce, and Parmesan cheese.", mainDishSection);

// beverages
const beverageSection = document.createElement("div");
beverageSection.className = "section";

const beverageTitle = document.createElement("h1");
beverageTitle.textContent = "Beverages";

beverageSection.appendChild(beverageTitle);

let classicLemonade = new order("Classic Lemonade", 2.99, "Refreshing lemonade made with fresh lemons, sugar, and a hint of mint.", beverageSection);
beverageSection.appendChild(document.createElement("hr"));
let icedTea = new order("Iced Tea", 2.49, "Cool and revitalizing iced tea, with an option to add lemon or peach flavor.", beverageSection);
beverageSection.appendChild(document.createElement("hr"));
let softDrinks = new order("Soft Drinks", 1.99, "Choose from Coke, Sprite, Fanta, or Diet Coke, served chilled with ice.", beverageSection);

// desserts
const dessertSection = document.createElement("div");
dessertSection.className = "section";

const dessertTitle = document.createElement("h1");
dessertTitle.textContent = "Desserts";

dessertSection.appendChild(dessertTitle);

let chocolateLavaCake = new order("Chocolate Lava Cake", 4.99, "Warm and gooey chocolate cake with a molten center, served with vanilla ice cream.", dessertSection);
dessertSection.appendChild(document.createElement("hr"));
let cheeseCakeSlice = new order("Cheesecake Slice", 4.49, "Creamy cheesecake with a buttery graham cracker crust, topped with a strawberry sauce drizzle.", dessertSection);

const sectionSplitter1 = document.createElement("hr");
sectionSplitter1.className = "sectionSplitter";
const sectionSplitter2 = document.createElement("hr");
sectionSplitter2.className = "sectionSplitter";

table.appendChild(mainDishSection);
table.appendChild(sectionSplitter1);
table.appendChild(beverageSection);
table.appendChild(sectionSplitter2);
table.appendChild(dessertSection);

export default table;