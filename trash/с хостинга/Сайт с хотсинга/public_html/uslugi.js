document.querySelectorAll(".select_uslugi").forEach((el) => {
  el.addEventListener("click", function (e) {
    if (!e.target.classList.contains("option_uslugi")) {
      this.classList.toggle("collapsed_uslugi");

      const shownUslugi = this.querySelector(".shown_uslugi");
      shownUslugi.classList.toggle(
        "red-text",
        !shownUslugi.classList.contains("red-text")
      );
    }
  });

  el.querySelectorAll(".option_uslugi").forEach((option) => {
    option.addEventListener("click", function (e) {
      e.stopPropagation();

      el.querySelector(".shown_uslugi").innerHTML = this.innerHTML;

      el.classList.add("collapsed_uslugi");

      document.querySelectorAll(".shown_uslugi").forEach((shown) => {
        shown.classList.remove("red-text");
      });
    });
  });
});
