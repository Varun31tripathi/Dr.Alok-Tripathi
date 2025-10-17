
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("qrModal");
  const openBtn = document.getElementById("donateBtn");
  const closeBtn = document.getElementById("closeModal");

  if (!modal || !openBtn || !closeBtn) return;

  // Helper Functions
  const openModal = () => {
    modal.style.display = "flex";
    modal.classList.add("fade-in");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden"; // prevent background scroll
    closeBtn.focus();
  };

  const closeModal = () => {
    modal.classList.remove("fade-in");
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "auto";
    }, 200);
  };

  // Event Listeners
  openBtn.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);

  // Click outside closes modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Escape key closes modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") closeModal();
  });

  // Optional: Simple thank-you toast after closing
  modal.addEventListener("transitionend", (e) => {
    if (e.propertyName === "opacity" && modal.style.display === "none") {
      console.log("Donation modal closed");
    }
  });
});
