var circleNum = 7;
var circles = [];

var sizes = [];
var colors = ["#ffdd00", "#dd00ff", "#00ffdd"];
var xlist = [200, 1200, 600];
var ylist = [200, 400, 700];

var setupSizes = function(){
  var temp = 25;
  sizes.push(temp);
  for (var i=0; i<circleNum; i++){
    sizes.push(temp*=1.618)
  }
}

setupSizes();

for (var i=0; i<circleNum; i++){
  for (var j=0; j<3; j++){
    var tempCircle = {
        x: xlist[j],
        y: ylist[j],
        size: sizes[i],
        begin: Math.floor(Math.random() * 360),
        color: colors[j]
    };
    circles.push(tempCircle);
  }
}

setInterval(Draw, 33);

$(function () {
    Draw();
    $(window).resize(function() {
        Draw();
    });
});

function sizing(){
    $('#canvas').attr({height:$('#wrapper').height()});
    $('#canvas').attr({width:$('#wrapper').width()});
};

var rad = (Math.PI/180)
function Draw(){
  sizing();
  var context = document.getElementById('canvas').getContext('2d');
  var circle;
  for (var i=0; i<circleNum*3; i++){
    circle = circles[i];
    context.beginPath();
    context.strokeStyle = circle.color;
    context.lineWidth = 1;
    context.arc(circle.x, circle.y, circle.size, rad*circle.begin, rad*((circle.begin+100)%360), true);
    context.stroke();
    circle.begin += 50/circle.size;
    if (circle.begin > 360){
        circle.begin -= 360;
    }
  }
};
