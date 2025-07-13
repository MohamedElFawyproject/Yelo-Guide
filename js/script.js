document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const backToTop = document.getElementById("backToTop");

  // البحث داخل التصنيفات الرئيسية
  searchInput.addEventListener("input", function () {
    const value = this.value.trim().toLowerCase();
    if (value.length < 2) return;

    const sections = document.querySelectorAll(".section-block");
    for (let section of sections) {
      const heading = section.querySelector("h2");
      if (heading && heading.textContent.toLowerCase().includes(value)) {
        section.scrollIntoView({
  behavior: "smooth",
  block: "start"
});
        section.classList.add("highlighted");
        // شيل الـ highlight من كل الأقسام
document.querySelectorAll(".section-block").forEach(sec => {
  sec.classList.remove("highlighted");
});

// لو في قيمة مكتوبة، ضيف highlight على القسم المطابق
if (heading && heading.textContent.toLowerCase().includes(value)) {
  const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({
    top: offsetTop,
    behavior: "smooth"
  });
  section.classList.add("highlighted");
  break;
}

      }
    }
  });

  // زر الرجوع للأعلى
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
