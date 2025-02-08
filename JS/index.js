import { loadLanguageData, changeLanguage } from "./data.js";
import { updateTextContent, createList } from "./uiUpdate.js";

let lang = {};

async function loadHomeLanguage() {
  try {
    lang = await loadLanguageData();
    const savedLanguage = localStorage.getItem("language") || "en";
    updateHomeUI(savedLanguage);
  } catch (error) {
    console.error("Error loading language data", error);
  }
}
function updateHomeUI(language) {
  const selectedLanguage = changeLanguage(language, lang);
  if (selectedLanguage) {
    updateTextContent("languageToggle", selectedLanguage.btnTXT);
    updateTextContent("greeting", selectedLanguage.greeting);
    updateTextContent("introduction", selectedLanguage.introduction);
    updateTextContent("about", selectedLanguage.about);
    // FOOTER
    updateTextContent("phone", selectedLanguage.footer.phone);
    updateTextContent("mail", selectedLanguage.footer.mail);
    updateTextContent("social", selectedLanguage.footer.follow);
  }

  createList(
    "menu",
    selectedLanguage.nav.navItem.map(
      (item, i) => `
          <a href="${selectedLanguage.nav.pagePath[i]}">${item}</a>`
    )
  );
}

document.addEventListener("DOMContentLoaded", loadHomeLanguage);

const toggleButton = document.getElementById("languageToggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("language");
    const newLanguage = currentLanguage === "en" ? "rs" : "en";
    updateHomeUI(newLanguage);
  });
}
