async function output(){

var data = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=bb2ed1f88f0d6474d12009cf9651262e");
var res = await data.json();

var x =res.city;
var y = res.city.name;
//var z = res.list[6];
var card0 = res.list[0].main.temp;
var card1 = res.list[8];
var card2 = res.list[16];
var card3 = res.list[24];
var card4 = res.list[32];
var card5 = res.list[38];
var card6 = res.list[39];





console.log(res);
console.log(x);
console.log(y);
console.log(z);
document.getElementById("ggg").innerHTML = z;


}

output();