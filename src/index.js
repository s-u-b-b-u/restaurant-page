import "./styles.css" 
import "./menu-page.css"
import "./contact-page.css"
import { homePage  } from "./home-page.js";
import { menuPage } from "./menu-page.js";
import { contactPage } from "./contact-page.js";

const menuTab = document.querySelector("#menu");
const homeTab = document.querySelector("#home");
const contactTab = document.querySelector("#contact");
const content = document.querySelector("#content");

// To click hometab after loading the DOM
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").click();
});

menuTab.addEventListener('click', () => {
    content.innerHTML = menuPage();
})


homeTab.addEventListener('click', () => {
    content.innerHTML = homePage();
})

contactTab.addEventListener('click', () => {
    content.innerHTML = contactPage();
})
