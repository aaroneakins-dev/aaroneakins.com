const switchInput = document.getElementById("theme-switch");
const root = document.documentElement;

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  switchInput.checked = theme === "dark";
}

(function initTheme() {
  const saved = localStorage.getItem("theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (systemDark ? "dark" : "light");
  applyTheme(theme);
})();

switchInput.addEventListener("change", () => {
  const newTheme = switchInput.checked ? "dark" : "light";
  applyTheme(newTheme);
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
  if (!localStorage.getItem("theme")) applyTheme(e.matches ? "dark" : "light");
});
