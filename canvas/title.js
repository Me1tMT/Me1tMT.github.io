onload = function() {
  drawTitle();
};

function drawTitle() {
  var canvas = document.getElementById('titleLogo');
  var ctx = canvas.getContext('2d');
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(50, 175);
  ctx.quadraticCurveTo(75, 175, 75, 50);
  ctx.lineTo(75, 150);
  ctx.quadraticCurveTo(75, 250, 100, 250);
  ctx.quadraticCurveTo(125, 250, 125, 150);
  ctx.lineTo(125, 50);
  ctx.quadraticCurveTo(125, 175, 150, 175);

  ctx.moveTo(150, 150);
  ctx.lineTo(250, 150);

  ctx.moveTo(250, 100);
  ctx.lineTo(350, 100);
  ctx.moveTo(300, 50);
  ctx.lineTo(300, 150);
  ctx.arc(300, 200, 50, (Math.PI/180)*-90, (Math.PI/180)*170, false);

  ctx.moveTo(350, 175);
  ctx.lineTo(425, 175);
  ctx.moveTo(375, 150);
  ctx.lineTo(375, 250);
  ctx.moveTo(425, 150);
  ctx.lineTo(425, 175);
  ctx.arc(425, 200, 25, (Math.PI/180)*-90, (Math.PI/180)*90, false);

  ctx.moveTo(450, 50);
  ctx.lineTo(450, 250);
  ctx.quadraticCurveTo(450, 150, 500, 150);
  ctx.quadraticCurveTo(500, 250, 550, 250);

  ctx.stroke();
};
