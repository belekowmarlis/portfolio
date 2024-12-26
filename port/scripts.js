const translations = {
  ky: {
    title: "Менин Портфолиом",
    about: "Мен жөнүндө",
    projects: "Долбоорлор",
    contact: "Контакт",
    footer: "Бардык укуктар корголгон",
  },
  ru: {
    title: "Мое Портфолио",
    about: "Обо мне",
    projects: "Проекты",
    contact: "Контакты",
    footer: "Все права защищены",
  },
  en: {
    title: "My Portfolio",
    about: "About Me",
    projects: "Projects",
    contact: "Contact",
    footer: "All rights reserved",
  },
};

const languageSelector = document.getElementById("language-selector");
const userLang = localStorage.getItem("selectedLang") || "ky";

updateContent(userLang);

languageSelector.addEventListener("change", (event) => {
  const selectedLang = event.target.value;
  localStorage.setItem("selectedLang", selectedLang);
  updateContent(selectedLang);
});

function updateContent(lang) {
  document.querySelector("title").textContent = translations[lang].title;
  document.querySelector("#about h2").textContent = translations[lang].about;
  document.querySelector("#projects h2").textContent =
    translations[lang].projects;
  document.querySelector("#contact h2").textContent =
    translations[lang].contact;
  document.querySelector(
    ".footer p"
  ).textContent = ` © 2024 ${translations[lang].footer}`;
  languageSelector.value = lang;
}
