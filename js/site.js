document.querySelector('html').className = "js";

// IDs of products to scroll through
var products = ['#transformer', '#freq-converter', '#charger', '#inverter', '#stabilizer'];

// Get buttons from HTML
var prev = document.getElementById('prev');
var next = document.getElementById('next');

// Set initial value of href on prev & next buttons
var windowURL = window.location.href;
var hash_idx = windowURL.indexOf("#");
if (hash_idx != -1){
  var prod = windowURL.substring(hash_idx);
  prev.attributes.href.value = prod;
  next.attributes.href.value = prod;
} else {
  prev.attributes.href.value = products[0];
  next.attributes.href.value = products[0];
}

// href Change Functions
function moveToPrev(arr, item) {
  var idx = arr.indexOf(item.attributes.href.value);
  idx--;
  if (idx < 0) {
    idx = arr.length-1;
  }
  item.attributes.href.value = arr[idx];
}
function moveToNext(arr, item) {
  var idx = arr.indexOf(item.attributes.href.value);
  idx++;
  if (idx > arr.length-1){
    idx = 0;
  }
  item.attributes.href.value = arr[idx];
}

// Event Listeners for buttons
prev.addEventListener('click', function(event) {
  moveToPrev(products, prev);
  moveToPrev(products, next);
});
next.addEventListener('click', function(event) {
  moveToNext(products, prev);
  moveToNext(products, next);
});
