$(function () {
    var list = $("#banner");
    var showNum = 3;
    var num = 0;
    var total = $(">li", list).size();
    var liWidth = $("li:first", list).width();

    var copyPic = $(">li:lt("+showNum+")",list).clone();
    list.append(copyPic);

    $(".next").on("click",function(){
        if(num==total){
            num = 0;
            list.css("margin-left",num);
        }
        num++;
        list.stop().animate({marginLeft:-liWidth*num+"px"},500);
        return false;
    });
    $(".prev").on("click",function(){
        if(num==0){
            num = total;
            list.css("margin-left", -num*liWidth+"px");
        }
        num--;
        list.stop().animate({marginLeft:-liWidth*num+"px"},500);
        return false;
    });
});
