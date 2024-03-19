const cardsGrid = document.querySelector('.cards-grid');

for(let i = 0; i < 16; i++){
    const newDiv = document.createElement("div");
    newDiv.id = i;
    cardsGrid.appendChild(newDiv);
}

