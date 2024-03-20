const cardsGrid = document.querySelector('.cards-grid');

const cardPictures = {0: "images/Card-Pictures/apple.webp", 1:"images/Card-Pictures/dog.jpg",
 2:"images/Card-Pictures/boat.jpg", 3:"images/Card-Pictures/gazelle.webp", 4:"images/Card-Pictures/Hippo.jpg",
  5:"images/Card-Pictures/monkey.jpg", 6:"images/Card-Pictures/rubix.webp", 7:"images/Card-Pictures/penguin.jpg"};

for(let i = 0; i < 16; i++){
    const newImg = document.createElement("img");
    newImg.id = i;
    newImg.className= "cards";
    newImg.onclick = function flipImage(){

        if(i<=7){
            newImg.src = cardPictures[i];
        }
        else{
            newImg.src = cardPictures[15-i];
        }
        
    };
    cardsGrid.appendChild(newImg);
}