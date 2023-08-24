import imgFilePath from "./restaurant.jpg";
import "../designs/home.css"


const bannerImg = document.createElement("img");

bannerImg.setAttribute("src", imgFilePath);
bannerImg.setAttribute("width", "100%");
bannerImg.setAttribute("height", "400px");

const h1 = document.createElement("h1");
h1.textContent = "Chef Ben's Bistro";

const address = document.createElement("address");
address.textContent = "30 Meal Avenue, Dineville, Wyoming";

const para = document.createElement("p");
para.setAttribute("class", "copy");
para.innerHTML = `Made possible by Chef Ben's unrelenting pursuit of his aspiration to use<br> his passion to be in service of others. Established in 2009, Chef Ben's Bistro<br> has aimed to be a manifestation of that goal, to continually deliver on the<br> virtues of that notion, to fulfill - without fail - the idea that brought about its<br> inception. With spirited staff, quality selections and the highest standard of food<br> preparation and delivery, we welcome you to an intimate space to enjoy a<br> one of a kind experience - courtesy of Chef Ben.`;

const para2 = document.createElement("p");
para2.setAttribute("class", "hours-title");
para2.textContent = "Opening Hours";

const para3 = document.createElement("p");
para3.setAttribute("class", "hours");
para3.innerHTML = `Monday to Friday - 9am, 9pm<br>
Saturdays - Closed<br>
Sundays - 10am, 5pm<br>`;


const homeElements = [];
homeElements.push(bannerImg);
homeElements.push(h1);
homeElements.push(address);
homeElements.push(para);
homeElements.push(para2);
homeElements.push(para3);

const homeModule = () => {
    const div = document.createElement("div");
    for(let elem of homeElements){
        div.appendChild(elem);
    };
    return div;
};

export default homeModule;