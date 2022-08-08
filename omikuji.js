let username;
let userresult;
username = prompt ("お名前を教えてください。")
if (username == ""){
    username = "名無し";
}
document.getElementById("name").innerHTML = username;

let rand = Math.floor (Math.random ()*5);
if (rand == 0) {
    useresult = "大吉";
}
if (rand == 1) {
    useresult = "中吉";
}
if (rand == 2) {
    useresult = "小吉";
}
if (rand == 3) {
    useresult = "吉";
}
if (rand == 4) {
    useresult = "凶";
}

Document.getElementById("result").innerHTML = userresult;