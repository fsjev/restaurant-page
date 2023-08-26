// import dependencies
import renderElement from "./page-load";
import homeModule from "./home-tab";
import menuModule from "./menu-tab";
import contactModule from "./contact-tab";

const tabButtons = {
    home: document.getElementById("home-tab"),
    menu: document.getElementById("menu-tab"),
    contact: document.getElementById("contact-tab")
};

const contentDiv = document.getElementById("content");

// event listeners
tabButtons.home.addEventListener("click", (e) => {
    highlightTab(e);
    clearContent();
    renderElement(homeModule());
});

tabButtons.menu.addEventListener("click", (e) => {
    highlightTab(e);
    clearContent();
    renderElement(menuModule());
});

tabButtons.contact.addEventListener("click", (e) => {
    highlightTab(e);
    clearContent();
    renderElement(contactModule());
});

// indicates active tab by adding class attribute and removes class for inactive tabs
function highlightTab(e){
    e.target.setAttribute("class", "active");
    let otherBtns = [];
    Array.from(tabButtons.home.parentNode.parentNode.children).forEach(elem => {
        if(elem.childNodes[0] !== e.target){
            otherBtns.push(elem.childNodes[0]);
        };
    });
    otherBtns.forEach(btn => btn.removeAttribute("class", "active"));
};

function clearContent(){
    contentDiv.innerHTML = "";
};

tabButtons.home.click();