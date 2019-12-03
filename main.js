let canvas = document.getElementById("clock");
let context = canvas.getContext("2d");
let clockRadius = canvas.width/2;

// alert(clockRadius);

//draw a clock face
context.beginPath();
context.arc(clockRadius, clockRadius, clockRadius, 0, 2*Math.PI);
context.fill();

//add numbers
context.font = clockRadius / 10 + "px arial";
context.fillStyle = "purple";
context.textAlign = "center";
context.textBaseLine = "middle";

// context.fillText("12", clockRadius, clockRadius -(clockRadius * 0.9));
// context.fillText("1", clockRadius + clockRadius * 0.9 + Math.sin(2*Math.PI / 12), clockRadius - (clockRadius * 0.9 *  Math.cos(2 * Math.PI / 12)));

for (let i = 1; i <= 12; i ++) {
    context.fillText(i, clockRadius + clockRadius * 0.9 * Math.sin(i * 2*Math.PI / 12), clockRadius - (clockRadius * 0.9 *  Math.cos(i * 2 * Math.PI / 12)));
}
