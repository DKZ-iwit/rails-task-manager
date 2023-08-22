document.addEventListener("DOMContentLoaded", () => {
  const confirmButtons = document.querySelectorAll("[data-confirm]");
  confirmButtons.forEach(button => {
    button.addEventListener("click", e => {
      const message = button.getAttribute("data-confirm");
      if (!window.confirm(message)) {
        e.preventDefault();
      }
    });
  });
});
