let lang = {};

async function loadLanguage() {
  try {
    const response = await fetch("../languages.json");
    lang = await response.json();
    // console.log("PLEASE");
    const savedLanguage = localStorage.getItem("language") || "en";
    changeLanguage(savedLanguage);
  } catch (error) {
    console.error("There was something wrong with fetching the data :(", error);
  }
}
function changeLanguage(language) {
  if (lang[language]) {
    localStorage.setItem("language", language);

    //HOME
    const btnTxt = document.getElementById("languageToggle");
    if (btnTxt) btnTxt.textContent = lang[language].btnTXT;
    const greeting = document.getElementById("greeting");
    if (greeting) greeting.textContent = lang[language].greeting;

    const introduction = document.getElementById("introduction");
    if (introduction) introduction.textContent = lang[language].introduction;

    const about = document.getElementById("about");
    if (about) about.textContent = lang[language].about;

    //RESUME
    const header1 = document.getElementById("header1");
    if (header1) header1.textContent = lang[language].resume.header1;
    const headerEdu = document.getElementById("header-edu");
    if (headerEdu) headerEdu.textContent = lang[language].resume.headerEdu;

    //cards
    const arrayEdu = lang[language].resume.education;
    let cardInfo = document.getElementById("education");
    if (cardInfo && Array.isArray(arrayEdu)) {
      cardInfo.innerHTML = "";
      for (let i = 0; i < arrayEdu.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h4>${arrayEdu[i].title}</h4>
            <h5>${arrayEdu[i].school}</h5>
            <span>${arrayEdu[i].timeline}</span>
            <summary>${arrayEdu[i].summary}</summary>
            `;
        cardInfo.appendChild(card);
      }
    } else {
      console.error("I couldn't fill out the card!");
    }
    //SKILLS AND LANGUAGES
    const headerSnL = document.getElementById("headerSnL");
    if (headerSnL) headerSnL.textContent = lang[language].resume.headerSkills;
    //card skill
    const headerSkills = document.getElementById("headerSkills");
    if (headerSkills)
      headerSkills.textContent = lang[language].resume.headerSkill;

    const skillsArr = lang[language].resume.skills;
    const exp = lang[language].resume.skillsexp;
    let skills = document.getElementById("skills");
    if (skills && Array.isArray(skillsArr) && Array.isArray(exp)) {
      skills.innerHTML = "";
      for (let i = 0; i < skillsArr.length && exp.length; i++) {
        skills.innerHTML += `
            <li><span class="bolded">${skillsArr[i]}</span>${exp[i]}</li>
            `;
      }
    }

    //soft skills
    const headerSSkills = document.getElementById("headerSSkill");
    if (headerSSkills)
      headerSSkills.textContent = lang[language].resume.headerSSkill;

    const softSkillsArr = lang[language].resume.softSkills;
    let sSkills = document.getElementById("softSkills");
    if (sSkills && Array.isArray(softSkillsArr)) {
      sSkills.innerHTML = "";
      for (let i = 0; i < softSkillsArr.length; i++) {
        sSkills.innerHTML += `
        <li>${softSkillsArr[i]}</li>
        `;
      }
    }

    //languages
    const headerLanguage = document.getElementById("headerLang");
    if (headerLanguage)
      headerLanguage.textContent = lang[language].resume.headerLang;
    const langArr = lang[language].resume.languages;
    let langs = document.getElementById("langs");
    if (langs && Array.isArray(langArr)) {
      langs.innerHTML = "";
      for (let i = 0; i < langArr.length; i++) {
        langs.innerHTML += `
            <li>${langArr[i]}</li>
            `;
      }
    }

    // PROJECTS
    const projectHeader = document.getElementById("projectHeader");
    if (projectHeader)
      projectHeader.textContent = lang[language].projects.header;

    const arrayProjects = lang[language].projects.project;
    let cardContent = document.getElementById("projectCards");
    if (cardContent && Array.isArray(arrayProjects)) {
      cardContent.innerHTML = "";
      for (let i = 0; i < arrayProjects.length; i++) {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h4>${arrayProjects[i].title}</h4>
        <span>
          <a href="${arrayProjects[i].url}"
            >${arrayProjects[i].url}</a
            ></span
            >
            <summary>${arrayProjects[i].summary}</summary>
            `;
        cardContent.appendChild(card);
      }
    } else {
      console.error("I couldn't fill out the card!");
    }
  }
}
document.addEventListener("DOMContentLoaded", loadLanguage);

const toggleButton = document.getElementById("languageToggle");
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("language");
    const newLanguage = currentLanguage === "en" ? "rs" : "en";
    changeLanguage(newLanguage);
  });
}
