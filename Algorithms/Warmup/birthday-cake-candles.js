function main() {
    var n = parseInt(readLine());
    height = readLine().split(' ');
    height = height.map(Number);
    
    //Get the max of the sorted array
    var max = Math.max.apply(null, height.sort(function(a, b){return a-b}));
    var occurences = 0;
    
    for (var i = 0; i < height.length; i++) {
           if (height[i] === max) {
               occurences++;
           }
    }
    console.log(occurences);
}