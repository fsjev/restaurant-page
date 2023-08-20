import renderElement from "./page-load";
import imgFilePath from "./restaurant.jpg";

const img = document.createElement("img");
img.setAttribute("src", imgFilePath);
img.setAttribute("width", "400px");
img.setAttribute("height", "auto");

const headline = document.createElement("h1");
headline.textContent = "Chef Ben's Bistro";

const para = document.createElement("p");
para.innerHTML = `Made possible by Chef Ben's unrelenting pursuit of his aspiration to use<br> his passion to be in service of others. Established in 2009, Chef Ben's Bistro<br> has aimed to be a manifestation of that goal, to continually deliver on the<br> virtues of that notion, to fulfill - without fail - the idea that brought about its<br> inception. With spirited staff, quality selections and the highest standard of food<br> preparation and delivery, we welcome you to an intimate space to enjoy a<br> one of a kind experience - courtesy of Chef Ben.`;
 
const homeElements = [];
homeElements.push(img);
homeElements.push(headline);
homeElements.push(para);


for(let elem of homeElements){
    renderElement(elem);
};