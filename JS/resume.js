import { loadLanguageData, changeLanguage } from "./data.js";
import {
  updateTextContent,
  updateInnerHTML,
  createCards,
  createList,
} from "./uiUpdate.js";

let lang = {};

async function loadResumeLanguage() {
  try {
    lang = await loadLanguageData();
    const savedLanguage = localStorage.getItem("language") || "en";
    updateResumeUI(savedLanguage);
  } catch (error) {
    console.error("Error loading language data", error);
  }
}

function updateResumeUI(language) {
  const selectedLanguage = changeLanguage(language, lang);
  if (selectedLanguage) {
    updateTextContent("header1", selectedLanguage.resume.header1);
    updateTextContent("header-edu", selectedLanguage.resume.headerEdu);

    createCards(
      "education",
      selectedLanguage.resume.education.map(
        (item) => `
      <h4>${item.title}</h4>
      <h5>${item.school}</h5>
      <span>${item.timeline}</span>
      <summary>${item.summary}</summary>
    `
      )
    );

    updateTextContent("headerSnL", selectedLanguage.resume.headerSkills);
    updateTextContent("headerSkills", selectedLanguage.resume.headerSkill);

    createList(
      "skills",
      selectedLanguage.resume.skills.map(
        (skill, i) => `
      <span class="bolded">${skill}</span>${selectedLanguage.resume.skillsexp[i]}
    `
      )
    );

    updateTextContent("headerSSkill", selectedLanguage.resume.headerSSkill);
    createList(
      "softSkills",
      selectedLanguage.resume.softSkills.map((skill) => `${skill}`)
    );

    updateTextContent("headerLang", selectedLanguage.resume.headerLang);
    createList(
      "langs",
      selectedLanguage.resume.languages.map((language) => `${language}`)
    );
  }
}

document.addEventListener("DOMContentLoaded", loadResumeLanguage);
