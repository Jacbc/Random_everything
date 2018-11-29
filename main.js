let body = document.body;
let gridDiv = document.querySelector("#gridDiv");
//let mainArticles = document.getElementById('mainArticles');
let mainArticles = document.querySelector("#mainArticles");
let div = document.querySelectorAll("div");



/*
console.log(peopleArray[0][0]);
console.log(peopleArray[0]);

for (let i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i][0]);
}
console.log();
*/

let antallTekster = 6; //Bestem hvor mange random tekster

function leggTilTekst() {
    for (let i = 0; i < antallTekster ; i++) {
        let randomTitle = document.createElement("h3");
        let randomTxt = document.createElement("p");

        let randomTitleGen = Math.floor((Math.random()*titleArray.length));
        let randomTextGen = Math.floor((Math.random()*textArray.length));

        randomTitle.innerHTML = titleArray[randomTitleGen];
        randomTxt.innerHTML = textArray[randomTextGen];

        let divTiTex = document.createElement('div');
        divTiTex.classList.add('span1');
        gridDiv.appendChild(divTiTex);
        //divTiTex.innerHTML = `${randomTitle} <br> ${randomTxt}`;

        divTiTex.appendChild(randomTitle);
        divTiTex.appendChild(randomTxt);
    }
}

leggTilTekst();


let numItemsToGenerate = 5; //how many gallery items you want on the screen
let imageWidth = 380; //your desired image width in pixels
let imageHeight = 510; //desired image height in pixels
let collectionID = 2270935; //the collection ID from the original url

function renderGalleryItem(){
    fetch(`https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/`).then((response)=> {
        let galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
      <img class="gallery-image span1" src="${response.url}" alt="gallery image"/>
    `;
        gridDiv.appendChild(galleryItem);

    })
}

for(let i=0; i<numItemsToGenerate; i++){
    renderGalleryItem();
}

let divs;
let numGridDivs;
let divClassForOrder;



function countDivs() {

    divs = document.querySelectorAll("div");
    numGridDivs = document.getElementById('gridDiv').querySelectorAll('div');

    for (let i = 0; i < numGridDivs.length; i++) {
        /*
        console.log(numGridDivs.length);
        */
    }
    //console.log(divs.length);
    console.log(numGridDivs.length, ` //${numItemsToGenerate+antallTekster}`);
}

function createDynClass() {
    for (let i = 0; i < numGridDivs.length; i++) {
        divClassForOrder = (`div.${i}`);
        //numGridDivs.classList.add(divClassForOrder);
        console.log(divClassForOrder);
    }
}


let loadTime = 750; //Delay in ms
let minDelay = 200; //Delay in ms
let extraForClass = 200; //Delay in ms

setTimeout(countDivs, loadTime);
setTimeout(createDynClass, minDelay + loadTime);

function addClassgridDiv() {
    for (let i = 0; i < numGridDivs.length; i++) {
        numGridDivs.classList.add((`div.${i}`));
    }
}

setTimeout(addClassgridDiv, minDelay + loadTime + extraForClass);


