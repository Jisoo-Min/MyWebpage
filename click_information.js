var search_id = ["leeky", "jisoo", "abc"];
var search_pw =["614", "5678", "abc"];

var matching_pw;

function is_member(id){
    if(search_id.indexOf(id)!=-1){
        matching_pw = search_pw[search_id.indexOf(id)];
        return true;
    }
    return false;
}


function login(id, pw){
    if(is_member(id)){
        if(pw == matching_pw){
            alert(id+"님 환영합니다.");
            location.replace("information.html");
        }else{
            alert("잘못된 비밀번호입니다.");
            location.replace("index.html");
            return;
        }
    }else{
        alert("등록되지 않은 아이디 입니다.");
        location.replace("index.html");
        return;
    }
}

function click_info(){
    var user_id = prompt("로그인이 필요한 서비스 입니다. 아이디를 입력하세요 (leeky)");
    var user_pw = prompt("비밀번호를 입력하세요(614)");
    login(user_id, user_pw);

}

function join(){
    var new_id = prompt("새로운 아이디를 입력해주세요.");
    var new_pw = prompt("새로운 비밀번호를 설정해주세요.");
    renew(new_id, new_pw);
}
function renew(new_id, new_pw){
    search_id.push(new_id);
    search_pw.push(new_pw);
}
