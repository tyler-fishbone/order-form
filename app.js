'use strict';

// ** array of all product instances **
Product.allProducts = [];

var productOrderForm = document.getElementById('product-form');

// constructor for products
function Product(filepath, name, quantityInCart) {
  this.filepath = filepath;
  this.name = name;
  this.quantityInCart = quantityInCart;
  // this.timesShown = timesShown;
  // this.timesClicked = timesClicked;
  Product.allProducts.push(this);
  // arrayOfProductNames.push(this.name);
}

function loadLocalStoreage() {
  if(!localStorage.getItem('arrayAllProducts')){
    console.log('array all products does not exist');
    instantiateProductObjects();
  } else {
    console.log('array all products exists');
    var lSData = JSON.parse(localStorage.getItem('arrayAllProducts'));
    Product.allProducts = lSData;
    // var lSProductNames = JSON.parse(localStorage.getItem('arrayProductNames'));
    // arrayOfProductNames = lSProductNames;
  }
}

function createDropdown() {
  var selectEl = document.getElementById('product-dropdown');
  for(var i in Product.allProducts){
    var optionEl = document.createElement('option');
    optionEl.textContent = Product.allProducts[i].name;
    optionEl.value = Product.allProducts[i].name;
    selectEl.appendChild(optionEl);
  }
}

function instantiateProductObjects() {
  new Product('img/bag.jpg', 'Bag', 0, 0);
  new Product('img/banana.jpg', 'Banana', 0, 0);
  new Product('img/bathroom.jpg', 'Bathroom', 0, 0);
  new Product('img/boots.jpg', 'Boots', 0, 0);
  new Product('img/bubblegum.jpg', 'Bubble Gum', 0, 0);
  new Product('img/cthulhu.jpg', 'Cthulhu', 0, 0);
  new Product('img/chair.jpg', 'Chair', 0, 0);
  new Product('img/dragon.jpg', 'Dragon', 0, 0);
  new Product('img/dog-duck.jpg', 'Dog Duck', 0, 0);
  new Product('img/pet-sweep.jpg', 'Pet Sweep', 0, 0);
  new Product('img/pen.jpg', 'Pen', 0, 0);
  new Product('img/shark.jpg', 'Shark', 0, 0);
  new Product('img/scissors.jpg', 'Scissors', 0, 0);
  new Product('img/tauntaun.jpg', 'Tauntaun', 0, 0);
  new Product('img/sweep.png', 'Sweep', 0, 0);
  new Product('img/usb.gif', 'USB', 0, 0);
  new Product('img/unicorn.jpg', 'Unicorn', 0, 0);
  new Product('img/wine-glass.jpg', 'Wine Glass', 0, 0);
  new Product('img/water-can.jpg', 'Water Can', 0, 0);
}

// function that runs when picture is clicked
// function handleClick(e) {

//   // ++ to the timesClicked property for image user click on
//   for(var i in Product.allProducts){
//     if(e.target.alt === Product.allProducts[i].name){
//       Product.allProducts[i].timesClicked++;
//       console.log(Product.allProducts[i]);
//     }
//   }
// }
// event listener
// sectionEl.addEventListener('click', handleClick);

// call function on page load
loadLocalStoreage();
createDropdown();