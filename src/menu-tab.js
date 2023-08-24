import pomImgPath from "../designs/assets/alexander-mils-rt6Bb3GTq0I-unsplash.jpg";
import ciderImgPath from "../designs/assets/bonnie-kittle-d6lNTwBs5bo-unsplash.jpg";
import friesImgPath from "../designs/assets/bowl-1842294_1280.jpg";
import porridgeImgPath from "../designs/assets/porridge-7951848_1280.jpg";
import pancakeImgPath from "../designs/assets/jaqueline-pelzer-MytHEJlzdcM-unsplash.jpg";
import hamImgPath from "../designs/assets/jonathan-pielmayer-XZUqPMLHvzw-unsplash.jpg";
import toastImgPath from "../designs/assets/french-toast-995532_1280.jpg";
import pizzaImgPath from "../designs/assets/pablo-pacheco-D3Mag4BKqns-unsplash.jpg";
import beefImgPath from "../designs/assets/roast-beef-sandwich-4899894_1280.jpg";
import turkeyImgPath from "../designs/assets/turkey-315079_1280.jpg";

import "../designs/menu.css"

const h1 = document.createElement("h1");
h1.textContent = "Menu";

const bevs = document.createElement("p");
bevs.setAttribute("class", "title");
bevs.textContent = "Beverages";

// pomegranate
const pom = document.createElement("div");
pom.setAttribute("class", "offer");

const pomSpan = document.createElement("span");
pomSpan.textContent = "Pomegranate Mix - $1.50";

const pomPara = document.createElement("p");
pomPara.textContent = "Pomegranate is a round shaped, red fruit with white flesh on the inside that is full of crunchy, juicy seeds called arils. Its juice has a high level of antioxidants present which are beneficial for our health. These antioxidants help in removing the free radicals in the body that damage our cells and lead to chronic health diseases like cancer.";

const pomImg = document.createElement("img");
pomImg.setAttribute("src", pomImgPath);
pomImg.setAttribute("width", "150px");
pomImg.setAttribute("height", "150px");

pom.appendChild(pomSpan);
pom.appendChild(pomPara);
pom.appendChild(pomImg);

// apple cider
const cider = document.createElement("div");
cider.setAttribute("class", "offer");

const ciderSpan = document.createElement("span");
ciderSpan.textContent = "Apple Cider Fizz - $1.50";

const ciderPara = document.createElement("p");
ciderPara.textContent = "Our Apple Cider Fizz drink is refreshing and sugar-free. It can help stabilize your blood sugars, suppress your appetite and support your immune system. A favorite among our patrons.";

const ciderImg = document.createElement("img");
ciderImg.setAttribute("src", ciderImgPath);
ciderImg.setAttribute("width", "150px");
ciderImg.setAttribute("height", "150px");

cider.appendChild(ciderSpan);
cider.appendChild(ciderPara);
cider.appendChild(ciderImg);

const sides = document.createElement("p");
sides.setAttribute("class", "title");
sides.textContent = "Sides";

// fries
const fries = document.createElement("div");
fries.setAttribute("class", "offer");

const friesSpan = document.createElement("span");
friesSpan.textContent = "Fries - $3.00";

const friesPara = document.createElement("p");
friesPara.textContent = "Complete any meal with a side of the classic French fries. Potatoes, the main ingredient, are a good source of potassium, vitamin C, and fiber. When fried, potatoes also provide some iron and protein. Our fries are garnished with Escallion and green peppers.";

const friesImg = document.createElement("img");
friesImg.setAttribute("src", friesImgPath);
friesImg.setAttribute("width", "150px");
friesImg.setAttribute("height", "150px");

fries.appendChild(friesSpan);
fries.appendChild(friesPara);
fries.appendChild(friesImg);

// porridge
const porridge = document.createElement("div");
porridge.setAttribute("class", "offer");

const porridgeSpan = document.createElement("span");
porridgeSpan.textContent = "Oatmeal Porridge - $5.00";

const porridgePara = document.createElement("p");
porridgePara.textContent = "Steel cut oats are the least processed form of oat cereal and it's the standard for our porridge sides. This selection is choice if you're looking to reduce your fat, sugar and calorie intake and still feel full. It's also rich in minerals including iron, copper, and manganese, with iron benefiting your metabolism and aiding oxygen transport, copper helping maintain healthy bones, and manganese supporting blood sugar management. With a nutty flavour, this side is topped off with sliced bananas for a satisfying texture when taken in your mouth all at once.";

const porridgeImg = document.createElement("img");
porridgeImg.setAttribute("src", porridgeImgPath);
porridgeImg.setAttribute("width", "150px");
porridgeImg.setAttribute("height", "150px");

porridge.appendChild(porridgeSpan);
porridge.appendChild(porridgePara);
porridge.appendChild(porridgeImg);

// pancake
const pancake = document.createElement("div");
pancake.setAttribute("class", "offer");

const pancakeSpan = document.createElement("span");
pancakeSpan.textContent = "Oatmeal pancake - $5.00";

const pancakePara = document.createElement("p");
pancakePara.textContent = "$1 for each additional pancake";

const pancakePara2 = document.createElement("p");
pancakePara2.textContent = "These healthy pancakes are made with whole wheat flour, which has fiber to keep you full and help your blood sugar level. Iron is important for transporting oxygen to your lungs via the red blood cells, it also helps to keep your immune cells functioning.";

const pancakeImg = document.createElement("img");
pancakeImg.setAttribute("src", pancakeImgPath);
pancakeImg.setAttribute("width", "150px");
pancakeImg.setAttribute("height", "150px");

pancake.appendChild(pancakeSpan);
pancake.appendChild(pancakePara);
pancake.appendChild(pancakePara2);
pancake.appendChild(pancakeImg);

const dishes = document.createElement("p");
dishes.setAttribute("class", "title");
dishes.textContent = "Main Dishes";

// ham
const ham = document.createElement("div");
ham.setAttribute("class", "offer");

const hamSpan = document.createElement("span");
hamSpan.textContent = "Ham and Cheese Sandwich - $4.50";

const hamPara = document.createElement("p");
hamPara.textContent = "This selection is made with uncured, unprocessed, hand-picked Ham thins, as these are fresh and are more organic. We clean and prepare this choice meat and will cook it to standard or as you desire. Ham is high in protein but low in carbs, fat, and fiber. It's also low in calories when eaten alone. This offering has cheese and pickles included.";

const hamImg = document.createElement("img");
hamImg.setAttribute("src", hamImgPath);
hamImg.setAttribute("width", "150px");
hamImg.setAttribute("height", "150px");

ham.appendChild(hamSpan);
ham.appendChild(hamPara);
ham.appendChild(hamImg);

// toast
const toast = document.createElement("div");
toast.setAttribute("class", "offer");

const toastSpan = document.createElement("span");
toastSpan.textContent = "French Toast - $3.00";

const toastPara = document.createElement("p");
toastPara.textContent = "French Toast from the other guys are usually high in calories due to the presence of refined carbs and too much sugar but Chef Ben revised the recipe to include whole grain bread and fresh fruit. He also ensured to reduce the amount of sugar, butter and cream while keeping it just as tasty - making our French Toast a slice above the rest!";

const toastImg = document.createElement("img");
toastImg.setAttribute("src", toastImgPath);
toastImg.setAttribute("width", "150px");
toastImg.setAttribute("height", "150px");

toast.appendChild(toastSpan);
toast.appendChild(toastPara);
toast.appendChild(toastImg);

// pizza
const pizza = document.createElement("div");
pizza.setAttribute("class", "offer");

const pizzaSpan = document.createElement("span");
pizzaSpan.textContent = "Pizza - $8.50";

const pizzaPara = document.createElement("p");
pizzaPara.textContent = "Chef Ben's Bistro's spin on the cheesy and meaty goodness of the classic Pepperoni Pizza. A favorite among our patrons.";

const pizzaImg = document.createElement("img");
pizzaImg.setAttribute("src", pizzaImgPath);
pizzaImg.setAttribute("width", "150px");
pizzaImg.setAttribute("height", "150px");

pizza.appendChild(pizzaSpan);
pizza.appendChild(pizzaPara);
pizza.appendChild(pizzaImg);

// beef
const beef = document.createElement("div");
beef.setAttribute("class", "offer");

const beefSpan = document.createElement("span");
beefSpan.textContent = "Roast Beef - $5.50";

const beefPara = document.createElement("p");
beefPara.textContent = "The roast beef sandwiches of Chef Ben's Bistro are juicy, cheesy, and loaded up with amazing flavors. Made with thinly sliced roast beef, vegetables (optional), and creamy horseradish sauce on our own mouth-watering, buttery bun baked in-house. Beef lovers, this is the sandwich for you!";

const beefImg = document.createElement("img");
beefImg.setAttribute("src", beefImgPath);
beefImg.setAttribute("width", "150px");
beefImg.setAttribute("height", "150px");

beef.appendChild(beefSpan);
beef.appendChild(beefPara);
beef.appendChild(beefImg);

// turkey
const turkey = document.createElement("div");
turkey.setAttribute("class", "offer");

const turkeySpan = document.createElement("span");
turkeySpan.textContent = "Roast Turkey - $6.50";

const turkeyPara = document.createElement("p");
turkeyPara.textContent = "Garnished with fresh herb sprigs and citrus wedges, this selection has all the good looks and moist flavor you dream of in an oven-roasted turkey. Enjoy Chef Ben's Bistro's rendition of a holiday staple everyone knows and loves. ";

const turkeyImg = document.createElement("img");
turkeyImg.setAttribute("src", turkeyImgPath);
turkeyImg.setAttribute("width", "150px");
turkeyImg.setAttribute("height", "150px");

turkey.appendChild(turkeySpan);
turkey.appendChild(turkeyPara);
turkey.appendChild(turkeyImg);

const menuElements = [];
menuElements.push(h1);
menuElements.push(bevs);
menuElements.push(pom);
menuElements.push(cider);
menuElements.push(sides);
menuElements.push(fries);
menuElements.push(porridge);
menuElements.push(pancake);
menuElements.push(dishes);
menuElements.push(ham);
menuElements.push(toast);
menuElements.push(pizza);
menuElements.push(beef);
menuElements.push(turkey);


const menuModule = () => {
    const div = document.createElement("div");
    for(let elem of menuElements){
        div.appendChild(elem);
    };
    return div;
};

export default menuModule;