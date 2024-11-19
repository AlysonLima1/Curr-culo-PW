document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#0056b3";
        link.style.textDecoration = "underline";
      });
      link.addEventListener("mouseout", () => {
        link.style.color = "#0073e6";
        link.style.textDecoration = "none";
      });
    });
    const toggleThemeBtn = document.createElement("button");
    toggleThemeBtn.textContent = "Alternar Tema";
    toggleThemeBtn.style.position = "fixed";
    toggleThemeBtn.style.bottom = "10px";
    toggleThemeBtn.style.right = "10px";
    toggleThemeBtn.style.padding = "10px 15px";
    toggleThemeBtn.style.backgroundColor = "#0073e6";
    toggleThemeBtn.style.color = "white";
    toggleThemeBtn.style.border = "none";
    toggleThemeBtn.style.cursor = "pointer";
    document.body.appendChild(toggleThemeBtn);
  
    toggleThemeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        toggleThemeBtn.textContent = "Alternar para Tema Claro";
      } else {
        toggleThemeBtn.textContent = "Alternar para Tema Escuro";
      }
    });
  });
  