import { loadLanguageData, changeLanguage } from "./data.js";
import { updateTextContent, updateInnerHTML, createCards } from "./uiUpdate.js";

let lang = {};

async function loadProjectsLanguage() {
  try {
    lang = await loadLanguageData();
    const savedLanguage = localStorage.getItem("language") || "en";
    updateProjectsUI(savedLanguage);
  } catch (error) {
    console.error("Error loading language data", error);
  }
}

function updateProjectsUI(language) {
  const selectedLanguage = changeLanguage(language, lang);
  if (selectedLanguage) {
    updateTextContent("projectHeader", selectedLanguage.projects.header);
    createCards(
      "projectCards",
      selectedLanguage.projects.project.map(
        (project) => `
      <h4>${project.title}</h4>
      <span><a href="${project.url}">Link</a></span>
      <summary>${project.summary}</summary>
    `
      )
    );
  }
}

document.addEventListener("DOMContentLoaded", loadProjectsLanguage);
