document.querySelector('HTML').className = "js";

// IDs of products to scroll through
var products = ['#transformer', '#freq-converter', '#charger', '#inverter', '#stabilizer'];
var fullProdNames = ['Constant Voltage Transformers', 'Frequency Converters', 'Industrial Battery Charger', 'Power Inverters', 'Servo Stabilizers']

// Get buttons from HTML
var prev = document.getElementById('prev');
var next = document.getElementById('next');

// Get Products Menu Items
var drop_down_parent = document.getElementById('drop-down-top');
var transf = document.getElementById("p1");
var freq_conv = document.getElementById("p2");
var charger = document.getElementById("p3");
var inverter = document.getElementById("p4");
var stabilizer = document.getElementById("p5");
var curProduct = transf;

// Set initial value of href on prev & next buttons as well as drop-down parent
var windowURL = window.location.href;
var hash_idx = windowURL.indexOf("#");
if (hash_idx != -1){
  var prod = windowURL.substring(hash_idx);
  prev.attributes.href.value = prod;
  next.attributes.href.value = prod;
  drop_down_parent.innerText = fullProdNames[products.indexOf(prod)];
  curProduct = document.getElementById(prod.substring(1));
  try {
    p1.parentElement.classList.remove("highlight");
    curProduct.parentElement.classList.add("highlight");
  }
  catch {
    console.log("Problem With Class Removal/Addition!");
  }
} else {
  prev.attributes.href.value = products[0];
  next.attributes.href.value = products[0];
  drop_down_parent.innerText = fullProdNames[0];
}


// href Change Functions
function moveToPrev(arr, item) {
  var idx = arr.indexOf(item.attributes.href.value);
  idx--;
  if (idx < 0) {
    idx = arr.length-1;
  }
  item.attributes.href.value = arr[idx];
  drop_down_parent.innerText = fullProdNames[products.indexOf(arr[idx])];
}
function moveToNext(arr, item) {
  var idx = arr.indexOf(item.attributes.href.value);
  idx++;
  if (idx > arr.length-1){
    idx = 0;
  }
  item.attributes.href.value = arr[idx];
  drop_down_parent.innerText = fullProdNames[products.indexOf(arr[idx])];
}
function getPrevProd(){
  if (curProduct.attributes.id.value == "p1")
    return p5;
  else if (curProduct.attributes.id.value == "p2")
    return p1;
  else if (curProduct.attributes.id.value == "p3")
    return p2;
  else if (curProduct.attributes.id.value == "p4")
    return p3;
  else if (curProduct.attributes.id.value == "p5")
    return p4;
  else {
    return p1;
  }
}
function getNextProd(){
  if (curProduct.attributes.id.value == "p1")
    return p2;
  else if (curProduct.attributes.id.value == "p2")
    return p3;
  else if (curProduct.attributes.id.value == "p3")
    return p4;
  else if (curProduct.attributes.id.value == "p4")
    return p5;
  else if (curProduct.attributes.id.value == "p5")
    return p1;
  else {
    return p1;
  }
}

// Event Listeners for buttons
prev.addEventListener('click', function(event) {
  moveToPrev(products, prev);
  moveToPrev(products, next);
  curProduct.parentElement.classList.remove("highlight");
  curProduct = getPrevProd();
  curProduct.parentElement.classList.add("highlight");
});
next.addEventListener('click', function(event) {
  moveToNext(products, prev);
  moveToNext(products, next);
  curProduct.parentElement.classList.remove("highlight");
  curProduct = getNextProd();
  curProduct.parentElement.classList.add("highlight");
});

// Event Listeners for drop-down menu
transf.addEventListener('click', function(event) {
  prev.attributes.href.value = products[4];
  next.attributes.href.value = products[1];
  drop_down_parent.innerText = fullProdNames[0];
  curProduct.parentElement.classList.remove("highlight");
  p1.parentElement.classList.add("highlight");
  curProduct = p1;
  console.log("Yes");
});
freq_conv.addEventListener('click', function(event) {
  prev.attributes.href.value = products[0];
  next.attributes.href.value = products[2];
  drop_down_parent.innerText = fullProdNames[1];
  curProduct.parentElement.classList.remove("highlight");
  p2.parentElement.classList.add("highlight");
  curProduct = p2;
});
charger.addEventListener('click', function(event) {
  prev.attributes.href.value = products[1];
  next.attributes.href.value = products[3];
  drop_down_parent.innerText = fullProdNames[2];
  curProduct.parentElement.classList.remove("highlight");
  p3.parentElement.classList.add("highlight");
  curProduct = p3;
});
inverter.addEventListener('click', function(event) {
  prev.attributes.href.value = products[2];
  next.attributes.href.value = products[4];
  drop_down_parent.innerText = fullProdNames[3];
  curProduct.parentElement.classList.remove("highlight");
  p4.parentElement.classList.add("highlight");
  curProduct = p4;
});
stabilizer.addEventListener('click', function(event) {
  prev.attributes.href.value = products[3];
  next.attributes.href.value = products[0];
  drop_down_parent.innerText = fullProdNames[4];
  curProduct.parentElement.classList.remove("highlight");
  p5.parentElement.classList.add("highlight");
  curProduct = p5;
});
