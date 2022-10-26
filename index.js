
// Select some elements...
let header = document.querySelector('#page-header')
header.style.textAlign = 'left';
header.textContent = 'My Doggos';



let dogImages = document.querySelectorAll('.dog-image');
console.log(dogImages)

for (let i = 0; i < dogImages.length; i++) {
    const element = dogImages[i];
    console.log(element)
    element.style.borderRadius = '50px'
    element.style.border = '5px solid red';
}


let footer = document.querySelector('.footer');
footer.styke.color = 'red';

