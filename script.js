//var surname = prompt("Greetings friend, may I enquire as to your surname?");
var apples = 5;
var pears = 10;
var piecesOfFruit = apples + pears;
var piecesForEachPerson = piecesOfFruit / 3;

var add = function(a, b)
{
	return a + b;
	
}

var result = add(1,2);
var jedi = {
	name: "Yoda",
	age: 899
	
};

var jediName = jedi.name;
alert("The best Jedi is " + jediName);
jedi.lightsaber = "green";

var emptyArray = [];
var shoppingList = ["Milk", "Bread", "Beans"];
alert(shoppingList[0]);
var handleClick = function (event)
{
		alert("CLICKED");
};
var pageHeader = document.querySelector('#header');
pageHeader.addEventListener('click', handleClick);