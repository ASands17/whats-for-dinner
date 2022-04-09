//Query Selector radio buttons
var sideButton = document.querySelector("#side");
var mainButton = document.querySelector("#mainDish");
var dessertButton = document.querySelector("#dessert");
var entireMealButton = document.querySelector("#entireMeal");

//Query selector other buttons
var cookButton = document.getElementById("letsCook");

//Dish arrays
var sidesArray = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'
];
var mainsArray = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'
];
var dessertArray = [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'
];

//Event listener
cookButton.addEventListener('click', checkRadioStatus);

function checkRadioStatus() {
  var sideDishStatus = document.getElementById('side');
  var mainDishStatus = document.getElementById('mainDish');
  var dessertStatus = document.getElementById('dessert');
  var entireMealStatus = document.getElementById('entireMeal');

  if (sideDishStatus.checked) {
    displaySide()
  } else if (mainDishStatus.checked) {
    displayMain()
  } else if (dessertStatus.checked) {
    displayDessert()
  } else if (entireMealStatus.checked) {
    displayEntireMeal()
  }
}

//Event Handler
function displaySide() {
  document.querySelector('h4').innerHTML = `${randomSide}!`;
  applyDishStyles ()
}

function displayMain() {
  document.querySelector('h4').innerHTML = `${randomMain}!`;
  applyDishStyles ()
}

function displayDessert() {
  document.querySelector('h4').innerHTML = `${randomDessert}!`;
  applyDishStyles ()
}

function displayEntireMeal() {
  document.querySelector('h4').innerHTML = `${randomMealMain} with a side of ${randomMealSide} and a ${randomMealDessert} for dessert!`;
  document.querySelector('svg').style.display = "none";
  document.querySelector('.selected-Dish').style.display = "block";
  document.querySelector('h4').style.fontSize = "1.50em";
  document.querySelector('#clear').style.marginTop = "52px";
}

function applyDishStyles() {
  document.querySelector('svg').style.display = "none";
  document.querySelector('.selected-Dish').style.display = "block";
  document.querySelector('h4').style.fontSize = "2em";
  document.querySelector('#clear').style.marginTop = "100px";
}

//Random Element Variables
var randomSide = sidesArray[Math.floor(Math.random() * sidesArray.length)];
var randomMain = mainsArray[Math.floor(Math.random() * mainsArray.length)];
var randomDessert = dessertArray[Math.floor(Math.random() * dessertArray.length)];

var randomMealSide = sidesArray[Math.floor(Math.random() * sidesArray.length)];
var randomMealMain = mainsArray[Math.floor(Math.random() * mainsArray.length)];
var randomMealDessert = dessertArray[Math.floor(Math.random() * dessertArray.length)];
