import { homePage  } from "./home-page.js";
import "./styles.css"

const menuTab = document.querySelector("#menu");
const homeTab = document.querySelector("#home");
const contactTab = document.querySelector("#contact");
const content = document.querySelector("#content");

// To click hometab after loading the DOM
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").click();
});

menuTab.addEventListener('click', () => {
    content.innerHTML = ``;
})

homeTab.addEventListener('click', () => {
    content.innerHTML = homePage();
})

contactTab.addEventListener('click', () => {
    content.innerHTML = ``;
})
