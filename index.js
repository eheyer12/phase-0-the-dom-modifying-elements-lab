// Write your code here!
const element = document.querySelector('#main');
element.remove();

const newHeader = document.createElement('h1');


newHeader.id = 'victory';

newHeader.textContent = "Eduardo Heyer is the champion";

document.body.append(newHeader);

