export function updateTextContent(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = content;
  }
}

export function updateInnerHTML(elementId, content) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = content;
  }
}

export function createCards(cardContainerId, cardData) {
  const cardContainer = document.getElementById(cardContainerId);
  if (cardContainer && Array.isArray(cardData)) {
    cardContainer.innerHTML = "";
    cardData.forEach((data) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = data;
      cardContainer.appendChild(card);
    });
  }
}

export function createList(containerId, items) {
  const container = document.getElementById(containerId);
  if (container && Array.isArray(items)) {
    container.innerHTML = "";

    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = item;
      container.appendChild(listItem);
    });
  } else {
    console.error(`I can't find container to put the list there!`);
  }
}
