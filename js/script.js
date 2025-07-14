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
// زر الوضع الداكن
const toggleButton = document.getElementById('toggleMode');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // احفظ الوضع في localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    toggleButton.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    toggleButton.textContent = '🌙';
  }
});

// عند تحميل الصفحة: استرجاع الوضع
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
  }
});
// تفعيل القائمة المتجاوبة
const toggleMenu = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

toggleMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});
// زر الرجوع للأعلى
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle Dark Mode
const darkModeBtn = document.getElementById("toggleDarkMode");

if (darkModeBtn) {
  darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      darkModeBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      darkModeBtn.textContent = "🌙";
    }
  });

  window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      darkModeBtn.textContent = "☀️";
    }
  });
}
