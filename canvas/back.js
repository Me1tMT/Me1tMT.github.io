var width = window.parent.screen.width;
var height = window.parent.screen.height;
var circleNum = 7;
var circles = [];

var sizes = [];
var colors = ["#457B9D", "#1D3557", "#E62646", "457B9D", '#A8DADC'];
var xlist = [width*0.2, width*0.8, width*0.5, width*0.8, width*0.2];
var ylist = [height*0.3, height*0.3, height*0.5, height*0.8, height*0.8];

var setupSizes = function(){
  var temp = 25;
  sizes.push(temp);
  for (var i=0; i<circleNum; i++){
    sizes.push(temp*=1.618)
  }
}

setupSizes();

for (var i=0; i<circleNum; i++){
  for (var j=0; j<colors.length; j++){
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
  for (var i=0; i<circleNum*colors.length; i++){
    circle = circles[i];
    context.beginPath();
    context.strokeStyle = circle.color;
    context.lineWidth = 1;
    context.arc(circle.x, circle.y, circle.size, rad*circle.begin, rad*((circle.begin+100)%360), true);
    context.stroke();
    circle.begin += 100/(circle.size*1.5);
    if (circle.begin > 360){
        circle.begin -= 360;
    }
  }
};
