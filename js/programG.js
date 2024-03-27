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
    newImg.src = "images/Card-Pictures/Unturned.png";
    //newImg.className = "cards";

    // Think about where your onclick is and decide if it's properly placed!!!!!!

    newImg.onclick = function flipImage(){

        newImg.classList.toggle('selectedPics');  //what toggle does??

        //randomise pics!!
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
        }
        else{ 
            image1 = document.getElementById(tempImages[0]);
            image2 = document.getElementById(tempImages[1]);                  
            setTimeout(compareImages, 1000);
            //image1.className = image2.className = "";
            imageCount = 0;
            tempImages = []; 
        }
        
    };
    cardsGrid.appendChild(newImg);
}

function compareImages(){
    
    //remove from class - selected ??
    /*image1.classList.remove("selected");
    image2.classList.remove("selected");  */

    if(image1.src != image2.src){
        
        image1.classList.toggle("noMatch");
        image2.classList.toggle("noMatch"); //interesting what will happen!
        
        image1.src = image2.src = "images/Card-Pictures/Unturned.png";
        //add gg sound?      
    }
    else{
        image1.classList.toggle('aMatch');
        image2.classList.toggle('aMatch');
    }
    
}

//after selecting pictures, set class name to 'selectedImg' then style it in css to have green border and animations maybe.
//If pics match then add onclick ="do nothing";