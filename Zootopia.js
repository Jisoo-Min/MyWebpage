$(function(){
    var bodyTag = document.getElementsByTagName("body")[0];

    $(document).mousemove(function(e){
        var x = e.pageX;
        var y = e.pageY;
        console.log(x +"  "+ y);
        if( (443<=x && x<=649)  && (528<=y && y<=803)){
            bodyTag.style.backgroundColor="#F4A460";
        }else if((792<=x && x<=948)&&  (527<=y && y<= 755)){
            bodyTag.style.backgroundColor="#B0E0E6";
        }else{
            bodyTag.style.backgroundColor="white";
        }

    })

})

