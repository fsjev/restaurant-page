import "../designs/contact.css";

const h1 = document.createElement("h1");
headline.textContent = "Contact Us";


const info = document.createElement("div");
info.setAttribute("class", "info");

const infoSpan = document.createElement("span");
infoSpan.textContent = "Chef Ben's Bistro";

const infoPara = document.createElement("p");
infoPara.textContent = "555-543-5554";

info.appendChild(infoSpan);
info.appendChild(infoPara);


const info2 = document.createElement("div");
info2.setAttribute("class", "info");

const info2Span = document.createElement("span");
info2Span.textContent = "Chef Ben's Manager";

const info2Para = document.createElement("p");
info2Para.textContent = "555-345-5554";

info2.appendChild(info2Span);
info2.appendChild(info2Para);

const message = document.createElement("div");
message.setAttribute("class", "message");

const messageSpan = document.createElement("span");
messageSpan.textContent = "Send us a message!";

const messageDiv = document.createElement("div");

message.appendChild(messageSpan);
message.appendChild(messageDiv);