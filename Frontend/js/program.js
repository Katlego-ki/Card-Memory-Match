
const timer = document.querySelector('.timer');
let x = 60;

let countDown = setInterval(()=>{
    x--;
    timer.innerHTML = x;
   
    if(x === -1){
        alert('Time up!');
        clearInterval(countDown);
        timer.innerHTML = 0;
        
    }

    if(x <= 10){
        timer.style.color = 'red';
    }
    
}, 1000)

const cardsGrid = document.querySelector('.cards-grid'); // Used to append newly created image tags.

let cardPictures = ["images/Card-Pictures/apple.webp", "images/Card-Pictures/dog.jpg",
 "images/Card-Pictures/boat.jpg", "images/Card-Pictures/gazelle.webp", "images/Card-Pictures/Hippo.jpg",
 "images/Card-Pictures/monkey.jpg", "images/Card-Pictures/rubix.webp", "images/Card-Pictures/penguin.jpg"];
 
let indicesArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

//Using the Fisher-Yates shuffle algorithm.
function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    console.log(array[i]);
  }
}

shuffle(cardPictures);
shuffle(indicesArray);

let tempImages = new Array(); //for storing clicked images.
let image1,image2; //These images will be compared in pairs after being clicked.
let imageCount = 0; //For tracking the number of images matched.

//Create img tags.
for(let i = 0; i < 16; i++){
    const newImg = document.createElement("img");
    newImg.classList.add('cards'); //??
    newImg.id = indicesArray[i];
    newImg.src = "images/Card-Pictures/Unturned.png";
    newImg.setAttribute('onclick', 'flipImage(this)');
    cardsGrid.appendChild(newImg);
    onmousedown = () => {return false}; //to disable default dragging of image elements.
}

 //element - image is passed as argument.
 let flipImage = (image)=>{

    image.classList.add('selectedPics');
    image.removeAttribute('onclick');  //disable double click/flip on images!

    if(Number(image.id)<= 7){
        image.src = cardPictures[Number(image.id)];
    }
    else{
        image.src = cardPictures[15 - Number(image.id)];
    }
   
    tempImages.push(image);
    console.log("The array has " + tempImages.length + " elements");
    
    if(tempImages.length >=2){                   
        setTimeout(compareImages, 1000);
    }
 }

//Compare the src of 2 selected images.
function compareImages(){

    while(tempImages.length >=2){

        let imagePair = tempImages.splice(0,2);
        if(!(imagePair[0].src===imagePair[1].src)){
            //console.log(`you selected image ${imagePair[0].id} and ${imagePair[1].id} for comparison "No-Match`);

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
            //console.log(`you selected image ${imagePair[0].id} and ${imagePair[1].id} for comparison "Matched"`);
            imagePair.forEach((image) => {
                image.classList.remove('selectedPics');
                image.classList.add('aMatch');
                image.classList.remove('cards');
                image.removeAttribute('onclick'); 
            });
            imageCount++;
            if(imageCount === 8){
                alert("YOU WON!"); //add div and style it!!!
                clearInterval(countDown);
            }
        }
    }
}