// زر الرجوع للأعلى
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
backToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// زر الوضع الليلي
const toggleDark = document.getElementById("toggleDarkMode");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
