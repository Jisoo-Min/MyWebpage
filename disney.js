
function displayDate(){
    var t = new Date();
    var now_hour = t.getHours();
    var now_minutes = t.getMinutes();
    var now_seconds = t.getSeconds();

    document.getElementById("now").innerHTML ="현재 시간은  ";
    document.getElementById("time").innerHTML = now_hour +"시 " + now_minutes+ "분 " +now_seconds +"초 ";
    document.getElementById("so").innerHTML =" 이므로";

    var now_time = document.getElementById("time");
    now_time.style.color = "red";

    if(isOpen(now_hour, now_minutes, now_seconds)==0){
        document.getElementById("isOpen").innerHTML ="폐장시간입니다.";
    }else{
        document.getElementById("isOpen").innerHTML ="개장시간입니다.";
    }
    var isOpen_contents =   document.getElementById("isOpen");
    isOpen_contents.style.color = "blue";
};

function isOpen(h, min, sec){
    var total_seconds = h*60*60 + min*60 + sec;
    var open_seconds = 9*60*60;
    var closed_seconds = 22*60*60;
    if ((open_seconds <= total_seconds) && (total_seconds <= closed_seconds) ) {
        return 1;
    }else{
        return 0;
    }
};


