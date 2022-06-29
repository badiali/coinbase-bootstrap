/* SCSS */
import './scss/style.scss';

/* Logo coinbase */
import './assets/img/coinbase.svg';

/* Imágenes */
import './assets/img/mobile.png';
import './assets/img/chart.png';
import './assets/img/coinbase-app.webp';
import './assets/img/earn-upsell-desktop.webp';

/* Iconos */
import './assets/img/favicon.png';
import './assets/img/bitcoin.svg';
import './assets/img/bitcoin-yellow.png';
import './assets/img/ethereum.png';
import './assets/img/cardano.png';
import './assets/img/solana.png';
import './assets/img/the-graph.png';
import './assets/img/amp.png';
import './assets/img/bars-icon.svg';
import './assets/img/ical-icon.svg';
import './assets/img/lock-icon.svg';
import './assets/img/mobile-app-icon.svg';
import './assets/img/box.svg';
import './assets/img/paper.svg';
import './assets/img/shield.svg';
import './assets/img/account.svg';
import './assets/img/bank.svg';
import './assets/img/buying-selling.svg';
// Individuals
import './assets/img/coinbase-icon.svg';
import './assets/img/new-earn-icon.svg';
import './assets/img/new-private-client-icon.svg';
import './assets/img/NFT.svg';
import './assets/img/new-wallet-icon.svg';
import './assets/img/new-card-icon.svg';
import './assets/img/new-borrow-icon.svg';
// Businesses
import './assets/img/new-institutional-icon.svg';
import './assets/img/new-commerce-icon.svg';
import './assets/img/new-assetHub-icon.svg';
import './assets/img/new-analytics-icon.svg';
import './assets/img/new-prime-icon.svg';
import './assets/img/new-custody-icon.svg';
import './assets/img/new-exchange-icon.svg';
// Developers
import './assets/img/cloudicon.png';
import './assets/img/walletlinkicon.png';
import './assets/img/ProductIcon_Pay.svg';
import './assets/img/SignIn.svg';
import './assets/img/commerceicon.png';
import './assets/img/exchangeicon.png';
import './assets/img/querytransacticon.png';

/* JS Bootstrap */
import Dropdown from 'bootstrap/js/dist/dropdown';
import Offcanvas from 'bootstrap/js/dist/offcanvas';

/* Animación del burger */
const offCanvasMenu = document.getElementById('navbarOffcanvasLg');
const burgerBttBar = document.querySelector('.burger-btt-wrap-bar');
offCanvasMenu.addEventListener('shown.bs.offcanvas', event => {
  burgerBttBar.classList.add('active');
});
offCanvasMenu.addEventListener('hidden.bs.offcanvas', event => {
  burgerBttBar.classList.remove('active');
});