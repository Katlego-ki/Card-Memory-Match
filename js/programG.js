const cardsGrid = document.querySelector('.cards-grid');

for(let i = 0; i < 16; i++){
    const newImg = document.createElement("img");
    newImg.id = i;
    newImg.className= "cards";
    newImg.addEventListener("click",flipImage);
    cardsGrid.appendChild(newImg);

}

let icon = document.querySelector(".icons");

function flipImage(){
    alert('clicked left mouse key');
}
