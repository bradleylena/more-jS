// alert("Welcome to Our Dealership");
function demo() {
  document.getElementById("demo").innerHTML =
    "<h4>Welcome to Our Dealership practicing jS</h4>";
  document.getElementById("demo").style = "color:red";
  // document.getElementById("demo").style = "background-color:yellow";
}

const cars = ["Mercedes", "BMW", "Audi", "Porsche", "VW"];
cars[3] = "volkswagen";
cars.push("Maybach");

function functioncars() {
  document.getElementById("cars").innerHTML = cars;
  document.getElementById("cars").style = "color:red";
  cars.style.left = "200px";
}
para.style.transition = "all 0.5s ease";
para.style.backgroundColor = "red";
para.style.color = "white";
para.style.textalign = "center";

function display() {
  document.getElementById("content").style = "display:block";
}

let x = 90;
let y = 100;
let z = 100 + 500;
document.getElementById("reda").innerHTML = "total number of cars is " + z;
console.log(z);

console.log(--x);
console.log(10 > 5 ? "Greater" : "Smaller");

let age = 18;
let canvote = age >= 18 ? "Yes" : "No";
document.getElementById("vote").innerHTML = canvote;

let score = 90;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade);
