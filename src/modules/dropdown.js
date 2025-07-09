export function initializeDropDowns() {
  const allDropDownsMenus = document.querySelectorAll(".menu-dropdown");
  for (let i = 0; i < allDropDownsMenus?.length ?? 0; i++) {
    const DropDownButton = allDropDownsMenus[i].querySelector(".menu-button");
    DropDownButton?.addEventListener("click", (event) => {
      const dropDownOptionsZone = DropDownButton?.nextElementSibling;
      if (dropDownOptionsZone) {
        dropDownOptionsZone.classList.toggle("hide");
      }
    });
  }
}
