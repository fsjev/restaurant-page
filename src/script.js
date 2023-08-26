// import renderElement from "./page-load";
// import homeModule from "./home-tab";
// import menuModule from "./menu-tab";
// import contactModule from "./contact-tab";

// renderElement(menuModule());

const tabButtons = {
    home: document.getElementById("home-tab"),
    menu: document.getElementById("menu-tab"),
    contact: document.getElementById("contact-tab")
};

tabButtons.home.addEventListener("click", highlightTab);
tabButtons.menu.addEventListener("click", highlightTab);
tabButtons.contact.addEventListener("click", highlightTab);


function highlightTab(e){
    e.target.setAttribute("class", "active");
    let otherBtns = [];
    Array.from(tabButtons.home.parentNode.parentNode.children).forEach(elem => {
        if(elem.childNodes[0] !== e.target){
            otherBtns.push(elem.childNodes[0]);
        };
    });
    otherBtns.forEach(btn => btn.removeAttribute("class", "active"))
};

