setTimeout(function(){ $("#introduce1").removeAttr("hidden");},1000);
setTimeout(function(){ $("#introduce2").removeAttr("hidden");},2000);
setTimeout(function(){ $("#introduce3").removeAttr("hidden");},3000);
setTimeout(function(){ $("#introduce4").removeAttr("hidden");},4000);
setTimeout(function(){ $("#introduce5").removeAttr("hidden");},5000);


$("#history_head").click(function() {
    $("#history_img").slideToggle(300);
});


$("#show").click(function(){
    $("#MickyVideo").show(100);
});

$("#hide").click(function(){
    $("#MickyVideo").hide();
});

$("#Mickyvideo").ready(function(){
    $("#MickyVideo").hide();
});

$("#showFounder").mouseover(function(){
    $("#founder").fadeTo("slow", 1);
});

$("#showFounder").mouseout(function(){
    $("#founder").fadeTo("slow", 0.3);
});

$("#showFounder").ready(function(){
    $("#founder").fadeTo("slow", 0.3);
});
