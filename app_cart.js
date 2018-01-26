'use strict';

// ** array of all product instances **
var lSArray = [];
lSArray = JSON.parse(localStorage.getItem('shoppingCart'));
console.log(lSArray);

Product.allProducts = [];

var shoppingCartTable = document.getElementById('table-chart');


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

Product.prototype.render = function () {
  console.log('hit render');

  //render image
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.innerHTML = '<img src="' + this.filepath + '" alt="' + this.name + '" width=100px>';
  trEl.appendChild(tdEl);

  //render name
  tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  //render quantity in cart
  tdEl = document.createElement('td');
  tdEl.textContent = this.quantityInCart;
  trEl.appendChild(tdEl);

  shoppingCartTable.appendChild(trEl);
};




function makeNewProducts() {
  console.log('hit makeNewProducts');

  for(var i in lSArray){
    new Product(lSArray[i].filepath, lSArray[i].name, lSArray[i].quantityInCart);
  }

  renderTable();
}

function renderTable() {
  for(var i in Product.allProducts){
    Product.allProducts[i].render();
  }
}

makeNewProducts();
