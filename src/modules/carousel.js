export function addCarouselBehavior() {
  let currentYTranslation = 0;

  const navItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < navItems?.length; i++) {
    navItems[i].addEventListener("click", (event) => {
      currentYTranslation = i;
      updateNav(i);
      carouselImagesZone.style.transform = `translate(${-currentYTranslation * 110}%, 0px)`;
    });
  }

  updateNav(currentYTranslation);
  const carouselImagesZone = document.querySelector(".carousel-images-zone");

  const previousButton = document.getElementById("previous-button");
  previousButton.addEventListener("click", (event) => {
    if (currentYTranslation === 0) {
      currentYTranslation = 5;
    } else {
      currentYTranslation -= 1;
    }
    carouselImagesZone.style.transform = `translate(${-currentYTranslation * 110}%, 0px)`;
    updateNav(currentYTranslation);
  });
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", (event) => {
    if (currentYTranslation === 5) {
      currentYTranslation = 0;
    } else {
      currentYTranslation += 1;
    }
    carouselImagesZone.style.transform = `translate(${-currentYTranslation * 110}% , 0px)`;
    updateNav(currentYTranslation);
  });
}

function initNav() {
  const navItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < navItems?.length; i++) {
    navItems[i].addEventListener("click", (event) => {
      updateNav(i);
    });
  }
}

function updateNav(index) {
  const navItems = document.querySelectorAll(".nav-item");
  for (let i = 0; i < navItems?.length; i++) {
    if (i === index) {
      navItems[i].classList.add("active");
      continue;
    }
    navItems[i].classList.remove("active");
  }
}
