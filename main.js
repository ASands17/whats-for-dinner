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
'Roasted Brussel Sprouts',
'Garlic Butter Mushrooms',
'Hush Puppies'
];
var mainsArray = [
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Kimchi Jjigae',
'Butternut Squash Soup',
'Chicken Adobo',
'Ramen',
'Harissa Salmon',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Smoked Mac and Cheese'
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
  document.querySelector('#foodText').innerHTML = `${getRandomItem(sidesArray)}!`;
  applyDishStyles ();
}

function displayMain() {
  document.querySelector('#foodText').innerHTML = `${getRandomItem(mainsArray)}!`;
  applyDishStyles ()
}

function displayDessert() {
  document.querySelector('#foodText').innerHTML = `${getRandomItem(dessertArray)}!`;
  applyDishStyles ()
}

function displayEntireMeal() {
  document.querySelector('#foodText').innerHTML = `${getRandomItem(mainsArray)} with a side of ${getRandomItem(sidesArray)} and a ${getRandomItem(dessertArray)} for dessert!`;
  document.querySelector('svg').style.display = "none";
  document.querySelector('.selected-Dish').style.display = "block";
  document.querySelector('#foodText').style.fontSize = "1.50em";
  document.querySelector('#clear').style.marginTop = "52px";
}

function applyDishStyles() {
  document.querySelector('svg').style.display = "none";
  document.querySelector('.selected-Dish').style.display = "block";
  document.querySelector('#foodText').style.fontSize = "2em";
  document.querySelector('#clear').style.marginTop = "100px";
}

function getRandomItem(mealArray) {
  return mealArray[Math.floor(Math.random() * (mealArray.length))];
}
