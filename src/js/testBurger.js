document.addEventListener("DOMContentLoaded", function() {
  const burgerButton = document.getElementById("burger-burgerenook");
  const header = document.querySelector(".header-burgerenook");
  const body = document.body;

  burgerButton.addEventListener("click", function() {
    header.classList.toggle("open-burgerenook");
    if (header.classList.contains("open-burgerenook")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  });

  const dropdownButton = document.querySelector(".dropdown .menu__item-burgerenook");
  const dropdownLinks = document.querySelectorAll(".dropdown-link");
  const dropdownTitle = document.getElementById("dropdown-title-burgerenook");
  const dropdownContent = document.getElementById("dropdown-content-burgerenook");
  const noActiveStrel = document.querySelector(".no-active-strel");
  const activeStrel = document.querySelector(".active-strel");

  dropdownButton.addEventListener("click", function(event) {
    event.preventDefault();
    this.parentElement.classList.toggle("show");
    if (this.parentElement.classList.contains("show")) {
      noActiveStrel.style.display = "none";
      activeStrel.style.display = "inline";
    } else {
      noActiveStrel.style.display = "inline";
      activeStrel.style.display = "none";
    }
  });

  dropdownLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const selectedCity = this.getAttribute("data-city");
      const currentCity = dropdownTitle.textContent;

      dropdownTitle.textContent = selectedCity;
      this.setAttribute("data-city", currentCity);
      this.textContent = currentCity;

      dropdownButton.parentElement.classList.remove("show");
      noActiveStrel.style.display = "inline";
      activeStrel.style.display = "none";
    });
  });

  document.addEventListener("click", function(event) {
    const isClickInsideDropdown = dropdownButton.contains(event.target);
    if (!isClickInsideDropdown) {
      const dropdowns = document.querySelectorAll(".dropdown");
      dropdowns.forEach(dropdown => dropdown.classList.remove("show"));
      noActiveStrel.style.display = "inline";
      activeStrel.style.display = "none";
    }
  });
});
