export async function loadLanguageData() {
    try {
      const response = await fetch("../languages.json");
      return await response.json();
    } catch (error) {
      console.error("There was something wrong with fetching the data :(", error);
      throw error;
    }
  }
  
  export function changeLanguage(language, lang) {
    if (lang[language]) {
      localStorage.setItem("language", language);
      return lang[language];
    }
    return null;
  }
  