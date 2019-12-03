let canvas = document.getElementById("clock");
let context = canvas.getContext("2d");
let clockRadius = canvas.width/2;

alert(clockRadius);

context.beginPath();
context.arc(clockRadius, clockRadius, clockRadius, 0, 2*Math.PI);
context.fill();