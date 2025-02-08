import { loadLanguageData, changeLanguage } from "./data.js";
import { updateTextContent, createList } from "./uiUpdate.js";

let lang = {};

async function loadNavAndFootLanguage() {
  try {
    lang = await loadLanguageData();
    const savedLanguage = localStorage.getItem("language") || "en";
    updateNavAndFooterUI(savedLanguage);
  } catch (error) {
    console.error("Error loading language data", error);
  }
}
function updateNavAndFooterUI(language) {
  const selectedLanguage = changeLanguage(language, lang);

  //   FOOTER
  if (selectedLanguage) {
      updateTextContent("phone", selectedLanguage.footer.phone);
      updateTextContent("mail", selectedLanguage.footer.mail);
      updateTextContent("social", selectedLanguage.footer.follow);
    }
    
    //HEADER
    createList(
        "menu",
        selectedLanguage.nav.navItem.map(
            (item, i) => `
            <a href="${selectedLanguage.nav.pagePath[i]}">${item}</a>`
        )
    );
}

document.addEventListener("DOMContentLoaded", loadNavAndFootLanguage);
