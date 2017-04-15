function main() {
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var c = parseInt(a_temp[2]);
    var d = parseInt(a_temp[3]);
    var e = parseInt(a_temp[4]);
    
    var myArray = [a,b,c,d,e], min = 0, max = 0;;
    myArray.sort(function(a, b){return a-b});

    for (var i = 0; i < myArray.length-1; i++) {
        min += myArray[i];
        max += myArray[i+1];
    }
    console.log(min + " " + max);
}