// dom animasi background
window.addEventListener("DOMContentLoaded", () => {
  VANTA.CLOUDS({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    speed: 1.2,
  });
  // transisi dan blur
  setTimeout(() => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    header.style.opacity = 1;
    header.style.filter = "blur(0px)";
    main.style.opacity = 1;
    main.style.filter = "blur(0px)";
  }, 50);
});
