"use strict";
(() => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#nav");
  const close = () => { button?.setAttribute("aria-expanded", "false"); button?.setAttribute("aria-label", "Abrir menu"); nav?.classList.remove("open"); };
  button?.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.setAttribute("aria-label", open ? "Abrir menu" : "Fechar menu");
    nav?.classList.toggle("open", !open);
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", close));
  document.addEventListener("keydown", event => { if (event.key === "Escape") close(); });
  document.querySelectorAll("[data-event]").forEach(element => element.addEventListener("click", () => {
    if (Array.isArray(window.dataLayer)) window.dataLayer.push({ event: element.dataset.event, destination: element.getAttribute("href") });
  }));
})();
