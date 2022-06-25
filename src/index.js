/* SCSS */
import './scss/style.scss';

/* Imágenes */
import './assets/img/favicon.png';
import './assets/img/coinbase.svg';

/* Fuentes */
import './assets/fonts/CoinbaseIcons.woff2';
import './assets/fonts/CoinbaseSans-Regular.woff2';
import './assets/fonts/CoinbaseSans-Medium.woff2';
import './assets/fonts/CoinbaseDisplay-Regular.woff2';
import './assets/fonts/CoinbaseDisplay-Medium.woff2';
import './assets/fonts/CoinbaseText-Regular.woff2';
import './assets/fonts/CoinbaseText-Medium.woff2';

/* JS Bootstrap */
import Dropdown from 'bootstrap/js/dist/dropdown';

/* Animación del burger */
let burgerBtt = document.querySelector('.burger-btt');
let burgerBttBar = document.querySelector('.burger-btt-wrap-bar');
burgerBtt.addEventListener('click', function(e) {
  e.preventDefault();
  burgerBttBar.classList.toggle('active');
});