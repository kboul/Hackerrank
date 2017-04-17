function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var myArray = [];
    for (var i = arr.length-1; i >= 0; i--) {
        myArray.push(arr[i]);
    }
    console.log(myArray.join(" "));
}