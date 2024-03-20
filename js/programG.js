const cardsGrid = document.querySelector('.cards-grid');

for(let i = 0; i < 16; i++){
    const newImg = document.createElement("img");
    newImg.id = i;
    newImg.className= "cards";
    newImg.onclick = function flipImage(){
        newImg.src = "images/Card-Pictures/apple.webp";
    };
    cardsGrid.appendChild(newImg);

}

//let icon = document.getElementById("0");


