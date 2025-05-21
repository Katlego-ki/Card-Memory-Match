onmousedown = () => {return false}; //to disable default dragging of image elements.

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

let cardPictures = ["apple", "dog", "boat", "gazelle", "Hippo", "monkey", "rubix", "penguin"];
let indicesArray = [...Array(16).keys()]

//Using the Fisher-Yates shuffle algorithm.
function shuffle(array){
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
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
}

 //element - image is passed as argument.
 let flipImage = (image)=>{

    image.classList.add('selectedPics');
    image.removeAttribute('onclick');  //disable double click/flip on images!

    let imageID = Number(image.id);
    image.src = "images/Card-Pictures/"+ (imageID<=7? cardPictures[imageID]:cardPictures[15 - imageID])+".jpg"
    tempImages.push(image);
    
    if(tempImages.length >=2){                   
        setTimeout(compareImages, 1000);
    }
 }

//Compare the src of 2 selected images.
function compareImages(){

    while(tempImages.length >=2){

        let imagePair = tempImages.splice(0,2);
        if(!(imagePair[0].src===imagePair[1].src)){

            imagePair.forEach((image) => {
                image.src = "images/Card-Pictures/Unturned.png";
                image.classList.add('noMatch');
                image.classList.remove('selectedPics');
                image.classList.remove('noMatch');
                image.setAttribute('onclick', 'flipImage(this)');
            });        
            //add gg sound?      
        }
        else{
            imagePair.forEach((image) => {
                image.classList.remove('selectedPics');
                image.classList.add('aMatch');
                image.classList.remove('cards');
                image.removeAttribute('onclick'); 
            });
            imageCount++;
            if(imageCount === 8){
                alert("YOU WON!");
                clearInterval(countDown);
            }
        }
    }
}