const cardsGrid = document.querySelector('.cards-grid');

const cardPictures = {0: "images/Card-Pictures/apple.webp", 1:"images/Card-Pictures/dog.jpg",
 2:"images/Card-Pictures/boat.jpg", 3:"images/Card-Pictures/gazelle.webp", 4:"images/Card-Pictures/Hippo.jpg",
 5:"images/Card-Pictures/monkey.jpg", 6:"images/Card-Pictures/rubix.webp", 7:"images/Card-Pictures/penguin.jpg"};

let imageCount = 0; //used for comparing 2 images
let tempImages = new Array();
let image1,image2; //These images will be compared in pairs after being clicked.

//Include a function to randomize pictures for every attempt!

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

        //when you're done try to make it more efficient and readable!
        if(imageCount!=2){

            console.log(imageCount + ": before"); //debugging
            imageCount++;
            console.log(imageCount + ": after"); //debugging
            
            tempImages.push(newImg.id);
            console.log(tempImages); //debugging
            
            //can we compare two selected pictures now?
            if(imageCount===2){
                compareImages(tempImages[0],tempImages[1]);
                imageCount = 0;
                tempImages = [];

            }
        }
        
    };
    cardsGrid.appendChild(newImg);
}

function compareImages(id1, id2){

    image1 = document.getElementById(id1);
    image2 = document.getElementById(id2);

    console.log(image1.src)// debugging

    if(image1.src != image2.src){
        image1.src = image2.src = "images/Card-Pictures/Unturned.png"; //fix, image1 is not an html element.
    }
    
}
