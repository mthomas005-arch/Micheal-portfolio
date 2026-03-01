// year
document.getElementById("year").textContent = new Date().getFullYear();

// reveal on scroll
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
}, { threshold: 0.12 });
reveals.forEach(r => io.observe(r));

// active nav link on scroll
const navLinks = document.querySelectorAll(".navlink");
const sections = [...navLinks]
  .map(a => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

function setActive() {
  let current = sections[0]?.id || "home";
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
  });
  navLinks.forEach(a => {
    const id = a.getAttribute("href").slice(1);
    a.classList.toggle("active", id === current);
  });
}
window.addEventListener("scroll", setActive);
setActive();

// theme toggle (simple)
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  const root = document.documentElement;
  const isDark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
  themeBtn.textContent = isDark ? "🌙" : "☀️";
});