const cardsGrid = document.querySelector('.cards-grid');

const cardPictures = {0: "images/Card-Pictures/apple.webp", 1:"images/Card-Pictures/dog.jpg",
 2:"images/Card-Pictures/boat.jpg", 3:"images/Card-Pictures/gazelle.webp", 4:"images/Card-Pictures/Hippo.jpg",
 5:"images/Card-Pictures/monkey.jpg", 6:"images/Card-Pictures/rubix.webp", 7:"images/Card-Pictures/penguin.jpg"};

let imageCount = 0; //used for comparing 2 images
let tempImages = new Array();
let image1,image2; //These images will be compared in pairs after being clicked.

//Include a function to randomize pictures for every attempt!

//create img tags
let index = 0;
for(; index < 16; index++){
    const newImg = document.createElement("img");
    newImg.classList.add('cards');
    newImg.id = index;
    newImg.src = "images/Card-Pictures/Unturned.png";
    cardsGrid.appendChild(newImg);
}
   
//loop through each img tag!
const images = document.querySelectorAll('.cards'); //querySelectorAll return all nodes that match selector!

images.forEach(image => {
    image.addEventListener('click', () => {

        if(Number(image.id)<= 7){
            image.src = cardPictures[Number(image.id)];
        }
        else{
            image.src = cardPictures[15-Number(image.id)];
        }

        imageCount++; //first things first!
        tempImages.push(image.id);
        image.classList.add('selectedPics')
        
        if(imageCount===2){ 
            image1 = document.getElementById(tempImages[0]);
            image2 = document.getElementById(tempImages[1]);                  
            setTimeout(compareImages, 1000);
            imageCount = 0;
            tempImages = []; 
        }
    });
 });

function compareImages(){
    if(tempImages[0] != tempImages[1]){
        document.querySelectorAll('selectedPics').classList.add('noMatch');     
        image1.src = image2.src = "images/Card-Pictures/Unturned.png";
        //add gg sound?      
    }
    else{
        document.querySelectorAll('.selectedPics').classList.add('aMatch');
    }
    document.querySelectorAll('.selectedPics').classList.remove('selectedPics');
    document.querySelectorAll('.selectedPics')?.classList.remove('noMatch'); //? if there was no match.
}

//after selecting pictures, set class name to 'selectedImg' then style it in css to have green border and animations maybe.
//If pics match then add onclick ="do nothing";

//When 'cleaning' code, separate creation of img tags and logic for the game!!

//for each element in a class, is possible? i.e looping through elements in a class.