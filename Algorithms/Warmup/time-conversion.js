function main() {
    var time = readLine();
    
    var hours = Number(time.match(/^(\d+)/)[1]);
    var minutes = Number(time.match(/:(\d+)/)[1]);
    var seconds = Number(time.match(/:(\d+):(\d+)/)[2]);
    if (hours < 12 && time.indexOf("AM") > -1) { console.log(time.replace("AM","")); return; }
    if (hours != 12) { hours += 12; }
    if (hours == 12 && time.indexOf("AM") > -1) { hours -= 12; }
    if (hours == 12 && time.indexOf("PM") > -1) { hours = 12; }
    if (hours < 10 ) { hours = "0" + hours; }
    if(minutes < 10) { minutes = "0" + minutes; }
    if(seconds < 10) { seconds = "0" + seconds; }

    console.log(hours + ":" + minutes + ":" + seconds);
}