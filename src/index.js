import "./styles.css";
import { addCarouselBehavior } from "./modules/carousel";

export function configMenuDropDown(buttonElement, dropdownElement) {
  if (!buttonElement._listenerAdded) {
    buttonElement.addEventListener("click", (event) => {
      dropdownElement.classList.toggle("hidden");
    });
    buttonElement._listenerAdded = true;
  }
}

function main() {
  const menuButtonElement = document.querySelector(".menu-button");
  const menuDropDownElement = document.querySelector(".menu-options-zone");
  configMenuDropDown(menuButtonElement, menuDropDownElement);
  
  addCarouselBehavior();
}
main();

