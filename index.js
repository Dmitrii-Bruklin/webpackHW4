import './index.css';
import imeg from './assets/js.png';

// console.log("Hello World");
const head1 = document.createElement("h1");
head1.textContent = "Webpack";
const img = document.createElement("img");
img.className = "js-image";
img.src = imeg;

document.body.append(head1,img);