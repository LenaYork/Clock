
// document.getElementById('faceColor').addEventListener('click', drawClock);
// document.getElementById('handColor').addEventListener('onChange', drawClock);
// document.getElementById('numberColor').addEventListener('onChange', drawClock);

function drawClock() {
  const faceColor = document.getElementById('face-color').value;
  const handColor = document.getElementById('hand-color').value;
  const numberColor = document.getElementById('number-color').value;

    let canvas = document.getElementById("clock");
    let context = canvas.getContext("2d");
    let clockRadius = canvas.width/2.1;

    //draw a clock face
    context.beginPath();
    context.fillStyle = faceColor;
    context.arc(clockRadius +5 , clockRadius + 5, clockRadius, 0, 2*Math.PI);
    context.fill();

    context.fillStyle = handColor;

    //draw a lil circle inside
    context.beginPath();
    context.arc(clockRadius +5 , clockRadius + 5, 7, 0, 2*Math.PI);
    context.fill();

    context.fillStyle = numberColor; //

    //add numbers
    context.font = clockRadius / 10 + "px arial";

    context.textAlign = "center";
    context.textBaseLine = "middle";

    // context.fillText("12", clockRadius, clockRadius -(clockRadius * 0.9));
    // context.fillText("1", clockRadius + clockRadius * 0.9 + Math.sin(2*Math.PI / 12), clockRadius - (clockRadius * 0.9 *  Math.cos(2 * Math.PI / 12)));

    for (let i = 1; i <= 12; i ++) {
        context.fillText(i, clockRadius + 5 + clockRadius * 0.9 * Math.sin(i * 2*Math.PI / 12), clockRadius + 15 - (clockRadius * 0.9 *  Math.cos(i * 2 * Math.PI / 12)));
    }

    //draw hands
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let fullHours = hours % 12 + minutes / 60 + seconds / 3600;
    let hoursAngle = fullHours * 2 * Math.PI / 12;
    let minutesAngle = minutes * 2 * Math.PI / 60;
    let secondsAngle = seconds * 2 * Math.PI / 60;

    context.strokeStyle = handColor;
    context.moveTo(clockRadius + 5, clockRadius + 5);
    context.lineTo(clockRadius + clockRadius * 0.4 * Math.sin(hoursAngle), clockRadius - (clockRadius * 0.4 *  Math.cos(hoursAngle)));
    context.lineWidth = 5;
    context.stroke();

    context.strokeStyle = handColor;
    context.moveTo(clockRadius + 5, clockRadius + 5);
    context.lineTo(clockRadius + clockRadius * 0.7 * Math.sin(minutesAngle), clockRadius - (clockRadius * 0.7 *  Math.cos(minutesAngle)));
    context.lineWidth = 3;
    context.stroke();

    context.strokeStyle = handColor;
    context.moveTo(clockRadius + 5, clockRadius + 5);
    context.lineTo(clockRadius + clockRadius * 0.8 * Math.sin(secondsAngle), clockRadius - (clockRadius * 0.8 *  Math.cos(secondsAngle)));
    context.lineWidth = 1;
    context.stroke();
  }

setInterval(drawClock, 1000);

