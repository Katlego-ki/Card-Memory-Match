const cardsGrid = document.querySelector('.cards-grid');

const cardPictures = {0: "images/Card-Pictures/apple.webp", 1:"images/Card-Pictures/dog.jpg",
 2:"images/Card-Pictures/boat.jpg", 3:"images/Card-Pictures/gazelle.webp", 4:"images/Card-Pictures/Hippo.jpg",
 5:"images/Card-Pictures/monkey.jpg", 6:"images/Card-Pictures/rubix.webp", 7:"images/Card-Pictures/penguin.jpg"};

let imageCount = 0; //used for comparing 2 images
let tempImages = new Array();

//create img tags
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

        if(imageCount!=2){

            console.log(imageCount + ": before");
            imageCount++;
            console.log(imageCount + ": after");

            if(Number(newImg.id)<=7){
                tempImages.push(cardPictures[Number(newImg.id)]);
                console.log(tempImages);
            }
            else{
                tempImages.push(cardPictures[Number(15 - newImg.id)]);
                console.log(tempImages);
            }
            
            if(imageCount===2){
                compareImages(tempImages[0],tempImages[1]);
                imageCount = 0;
                tempImages = [];

            }
        }
        
    };
    cardsGrid.appendChild();
}

function compareImages(image1, image2){
    if(image1 != image2){
        image1.id = image2 = "../images/Unturned.png";
    }
    
}
