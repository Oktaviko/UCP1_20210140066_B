function currentime(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var mid = "AM";
    mid = (hour >= 12) ? "PM" : "AM" ;
    hour = (hour ==0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " : " + mid;
        var t = setTimeout(currentime, 1000);
}

function updateTime(k){
    if (k < 10){
        return "0" + k;
    }
    else {
        return k;
    }
}

currentime();