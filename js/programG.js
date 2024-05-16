const cardsGrid = document.querySelector('.cards-grid'); // Used to append newly created image tags.

const cardPictures = {0: "images/Card-Pictures/apple.webp", 1:"images/Card-Pictures/dog.jpg",
 2:"images/Card-Pictures/boat.jpg", 3:"images/Card-Pictures/gazelle.webp", 4:"images/Card-Pictures/Hippo.jpg",
 5:"images/Card-Pictures/monkey.jpg", 6:"images/Card-Pictures/rubix.webp", 7:"images/Card-Pictures/penguin.jpg"};

let tempImages = new Array();
let image1,image2; //These images will be compared in pairs after being clicked.
//const testArr = [1,2,3,4,5];  was for testing
let imageCount = 0; //For tracking the number of images matched.
//Include a function to randomize pictures for every attempt!

//Create img tags.
for(let i = 0; i < 16; i++){
    const newImg = document.createElement("img");
    newImg.classList.add('cards'); //??
    newImg.id = i;
    newImg.src = "images/Card-Pictures/Unturned.png";
    cardsGrid.appendChild(newImg);
    onmousedown = () => {return false}; //to disable default dragging of image elements.
}
//loop through each img tag to addEventLister so that each img 'flips' when cliked.
const images = document.querySelectorAll('.cards'); //querySelectorAll return all nodes that match selector!
images.forEach(image => {
    image.setAttribute('onclick', 'flipImage(this)');
 });

 //element - image is passed as argument.
 let flipImage = (image)=>{

    image.classList.add('selectedPics');
    image.removeAttribute('onclick');  //disable double click/flip on images!

    if(Number(image.id)<= 7){
        image.src = cardPictures[Number(image.id)];
    }
    else{
        image.src = cardPictures[15-Number(image.id)];
    }
   
    tempImages.push(image);
    console.log("The array has " + tempImages.length + " elements");
    
    if(tempImages.length >=2){                   
        setTimeout(compareImages, 1000);
    }
 }

//Compare the src of 2 selected images.
function compareImages(){

    console.log("Before comparison there are "+  tempImages.length + "images"); // debugging!

    //let similar = tempImages[0] === tempImages[1]; 
   //console.log(`Pictures are similar: ${s}`);

    while(tempImages.length >=2){

        let imagePair = tempImages.splice(0,2);
        if(!(imagePair[0].src===imagePair[1].src)){
            console.log(`you selected image ${imagePair[0].id} and ${imagePair[1].id} for comparison "No-Match`);

            imagePair.forEach((image) => {
                image.classList.add('noMatch');
                image.src = "images/Card-Pictures/Unturned.png";
                image.classList.remove('selectedPics');
                image.classList.remove('noMatch');
                image.setAttribute('onclick', 'flipImage(this)');
            });        
            //add gg sound?      
        }
        else{
            console.log(`you selected image ${imagePair[0].id} and ${imagePair[1].id} for comparison "Matched"`);
            imagePair.forEach((image) => {
                image.classList.remove('selectedPics');
                image.classList.add('aMatch');
                image.classList.remove('cards');
                image.removeAttribute('onclick'); 
            });
            imageCount++;
            if(imageCount === 8){
                alert("YOU WON!"); //add div and style it!!!
            }
        }
    }

    //do wee need to return in order to break out of the fucntion?
}

//Fix the multiple images bug