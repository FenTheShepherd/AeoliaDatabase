let buttons = document.querySelectorAll(".toggle");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let info = button.nextElementSibling;
    info.classList.toggle("hidden");

    button.textContent = info.classList.contains("hidden")
      ? "More Info"
      : "Less Info";
  });
});

let toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  toggleButton.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});
