function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

let a = document.getElementById('btn3')
a.addEventListener('click', ()=>  {
  window.print()
}
)