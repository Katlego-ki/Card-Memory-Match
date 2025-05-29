onmousedown = () => {return false}; //to disable default dragging of image elements.

const newGameButton = document.getElementById('newGame');
newGameButton.setAttribute('onclick', 'newGame()');

const exitButton = document.getElementById('exit');
//newGameButton.setAttribute('onclick', 'exit()');

// function exit(){
//     //exit logic here
// }

const cardsGrid = document.querySelector('.cards-grid');

let countDown;
let timer;

let startTimer = () => {

    const timer = document.querySelector('.timer');
    timer.style.color = 'blue';
    timer.innerHTML = 60;
    let x = 60; //for tracking time

    countDown = setInterval(()=>{
    x--;
    timer.innerHTML--;
    
    if(x == 0){
        alert('Time up!');

        [...cardsGrid.children].forEach((child, i) => {
            child.removeAttribute('onclick');
        });

        clearInterval(countDown);    
    }

    if(x <= 10){
        timer.style.color = 'red';
    }   
    }, 1000)
}

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


// ======== New Game ==========

let newGame = () =>{
    if([...cardsGrid.children].length > 0) {
        clearInterval(countDown);

        shuffle(cardPictures);
        shuffle(indicesArray);

        [...cardsGrid.children].forEach((child, i) => {
            child.src = "images/Card-Pictures/Unturned.png";
            child.setAttribute('onclick', 'flipImage(this)');
            child.classList.remove('selectedPics', 'noMatch', 'match')
            child.id = indicesArray[i];
        });

        startTimer();
    } 
    
    else{
        clearInterval(countDown);
        for(let i = 0; i < 16; i++){
            const newImg = document.createElement("img");
            newImg.classList.add('cards'); //??
            newImg.id = indicesArray[i];
            newImg.src = "images/Card-Pictures/Unturned.png";
            newImg.setAttribute('onclick', 'flipImage(this)');
            cardsGrid.appendChild(newImg); 
        }
        startTimer();
    }
}

 //element - image is passed as argument.
 let flipImage = (image)=>{

    image.classList.add('selectedPics');
    image.removeAttribute('onclick');  //disable double click/flip on images!

    let imageID = Number(image.id);
    image.src = "images/Card-Pictures/"+ cardPictures[imageID<=7?imageID:15-imageID]+".jpg"
    tempImages.push(image);

    console.log
    
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
                image.classList.remove('noMatch','selectedPics');
                image.setAttribute('onclick', 'flipImage(this)');
            });        
            //add gg sound?      
        }
        else{
            imagePair.forEach((image) => {
                image.classList.remove('selectedPics', 'cards');
                image.classList.add('aMatch');
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