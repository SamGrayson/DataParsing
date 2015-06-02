console.log("Your code goes in this document.");

var allObj = items.map(function(obj){
  return obj;
});

/* ANSWER ONE IS HERE */

var allPrice = items.map(function(el){
  return el.price;
});
var totalPrice = allPrice.reduce(function(acc, curr){
  return acc + curr;
});
var avgPrice = totalPrice / allPrice.length;

document.getElementById('answer1').innerHTML = avgPrice;


/* ANSWER TWO IS HERE */

document.getElementById("answer2").innerHTML = "";

var filterArray = [];

allObj.forEach(function(el,idx,arr){
 if (el.price > 14 && el.price < 18) {
   filterArray.push("Title: ",el.title,"<br>");
 }
 return filterArray;
});

for (var i = 0; i < filterArray.length; i++) {
  document.getElementById("answer2").innerHTML += filterArray[i];
}


/* ANSWER THREE IS HERE */

var curObj = {};

allObj.forEach(function(el,idx,arr){
 if (el.currency_code === "GBP") {
   curObj.title = el.title;
   curObj.price = el.price;
 }
 return curObj;
});

document.getElementById('answer3').innerHTML = "Title: " + curObj.title;
document.getElementById('answer3').innerHTML += "<br>" + "Price: " + curObj.price;

/* ANSWER FOUR IS HERE */

document.getElementById("answer4").innerHTML = "";

var woodItems = [];

allObj.forEach(function(el,idx,arr){

 if (el.materials.indexOf('wood') > -1) {
   woodItems.push("Title: ", el.title, "<br>");
 }
 return woodItems;
});

for (var i = 0; i < woodItems.length; i++) {
document.getElementById('answer4').innerHTML += woodItems[i];
}

/* ANSWER FIVE IS HERE */

document.getElementById("answer5").innerHTML = "";

var eightMats = {};
var eightMatsArray = [];
allObj.forEach(function(el,index,array) {
 if (el.materials.length > 8) {
   eightMatsArray.push("Title: ",el.title, "<br>","Quantity: ",el.quantity, "<br>","Materials: ",el.materials, "<br>", "<br>");
 }
 return eightMatsArray;
});

for (var i = 0; i < eightMatsArray.length; i++) {
document.getElementById('answer5').innerHTML += eightMatsArray[i];
};

/* ANSWER SIX IS HERE */

var whoMade = [];

allObj.forEach(function(el,idx,arr){
 if (el.who_made === "i_did") {
   whoMade.push(el.user_id);
 }
 return whoMade;
});

document.getElementById('answer6').innerHTML = whoMade.length;
