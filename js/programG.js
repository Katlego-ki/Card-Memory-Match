const cardsGrid = document.querySelector('.cards-grid');

const cardPictures = {0: "images/Card-Pictures/apple.webp", 1:"images/Card-Pictures/dog.jpg",
 2:"images/Card-Pictures/boat.jpg", 3:"images/Card-Pictures/gazelle.webp", 4:"images/Card-Pictures/Hippo.jpg",
 5:"images/Card-Pictures/monkey.jpg", 6:"images/Card-Pictures/rubix.webp", 7:"images/Card-Pictures/penguin.jpg"};

let tempImages = new Array();
let image1,image2; //These images will be compared in pairs after being clicked.
const testArr = [1,2,3,4,5];
//Include a function to randomize pictures for every attempt!

//create img tags

for(let i = 0; i < 16; i++){
    const newImg = document.createElement("img");
    newImg.classList.add('cards'); //??
    newImg.id = i;
    newImg.src = "images/Card-Pictures/Unturned.png";
    cardsGrid.appendChild(newImg);
}

//loop through each img tag!
const images = document.querySelectorAll('.cards'); //querySelectorAll return all nodes that match selector!

images.forEach(image => {
    image.addEventListener('click', () => {

        image.classList.add('selectedPics');

        if(Number(image.id)<= 7){
            image.src = cardPictures[Number(image.id)];
        }
        else{
            image.src = cardPictures[15-Number(image.id)];
        }

        tempImages.push(image.src);
        console.log("The array has " + tempImages.length + " elements");
        
        if(tempImages.length === 2){ 
            image1 = document.getElementById(tempImages[0]);
            image2 = document.getElementById(tempImages[1]);                  
            setTimeout(compareImages, 1000);
        }
    });
 });

function compareImages(){

    console.log("Before comparison there are "+  tempImages.length + " elements which are " + tempImages[0] + " and " + tempImages[1]); // debugging!

    let similar = tempImages[0] === tempImages[1]; 
    console.log("Pictures are similar: "+ similar);

    if(!similar){

        document.querySelectorAll('.selectedPics').forEach((image) => {
            image.classList.add('noMatch');
            image.src = "images/Card-Pictures/Unturned.png";
            image.classList.remove('selectedPics');
            image.classList.remove('noMatch');

        });  
        
        //add gg sound?      
    }
    else{
        document.querySelectorAll('.selectedPics').forEach((image) => {
            //image.removeEventListener('click',);
            image.classList.remove('selectedPics');
            image.classList.add('aMatch');
            image.classList.remove('cards');
        });
    }

   /* document.querySelectorAll('.selectedPics')?.forEach(image =>{
        image.classList.remove('selectedPics');
    });

    document.querySelectorAll('.selectedPics')?.forEach(image => {
        image.classList.remove('noMatch');
    }); //? if there was no match. */

    tempImages = []; 
}

//after selecting pictures, set class name to 'selectedImg' then style it in css to have green border and animations maybe.
//If pics match then add onclick ="do nothing";

//When 'cleaning' code, separate creation of img tags and logic for the game!!

//for each element in a class, is possible? i.e looping through elements in a class.