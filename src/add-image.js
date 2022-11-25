import interstellar from './interstellar.jpg';
import rylieImage from "./homepage-image.svg";
import altText from "./altText.txt";

function addImage(){
    const img = document.createElement('img');
    img.src = interstellar;
    img.alt = 'Interstellar image';
    img.width = 300;
    const img2 = document.createElement('img');
    img2.src = rylieImage;
    img2.alt = altText;
    img2.width = 300;
    const body = document.querySelector('body');
    body.appendChild(img);
    body.appendChild(img2);
}

export default addImage;