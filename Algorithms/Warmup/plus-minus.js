function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var positive = [], negative = [], zeros = [], allArrays = [positive,negative,zeros];
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { 
            allArrays[0].push(arr[i]);
        }
        else if (arr[i] < 0) {
            allArrays[1].push(arr[i]);
        }
        else if (arr[i] == 0) {
            allArrays[2].push(arr[i]);
        }
    }

    for (var i = 0; i < allArrays.length; i++) {
        console.log(allArrays[i].length / arr.length);
    }
}