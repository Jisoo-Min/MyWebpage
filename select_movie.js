var color =["#B0E0E6","#FFEFD5", "	#90EE90", "#FAFAD2"];
function color_background(){
    var random = parseInt(Math.random()*4);
    var bodyTag = document.getElementsByTagName("body")[0];
    bodyTag.style.backgroundColor=color[random];

};

var theMovie1 = document.getElementById("movie1");
theMovie1.onmouseover = function(){
    theMovie1.firstChild.src="another_lapunzel.jpg";

}
theMovie1.onmouseout = function(){
    theMovie1.firstChild.src="rapunzel_poster.jpg";
}

var theMovie2 = document.getElementById("movie2");
theMovie2.onmouseover = function(){
    theMovie2.firstChild.src="another_frozen.jpg";

}
theMovie2.onmouseout = function(){
    theMovie2.firstChild.src="frozen_poster.jpg";
}

var theMovie3 = document.getElementById("movie3");
theMovie3.onmouseover = function(){
    theMovie3.firstChild.src="another_zootipia.jpg";

}
theMovie3.onmouseout = function(){
    theMovie3.firstChild.src="zootopia_poster.jpg";
}
