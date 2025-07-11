export function addCarouselBehavior() {
  let currentYTranslation = 0;
  const carouselImagesZone = document.querySelector(".carousel-images-zone");

  const previousButton = document.getElementById("previous-button");
  previousButton.addEventListener("click", (event) => {
    if (currentYTranslation === 0) {
      currentYTranslation = -5;
    } else {
      currentYTranslation += 1;
    }
    carouselImagesZone.style.transform = `translate(${currentYTranslation * 110}%, 0px)`;
  });
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", (event) => {
    if (currentYTranslation === -5) {
      currentYTranslation = 0;
    } else {
      currentYTranslation -= 1;
    }
    carouselImagesZone.style.transform = `translate(${currentYTranslation * 110}% , 0px)`;
  });
}
