function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    
    var left_diagonal = 0
    var right_diagonal = 0;
    
    for (var i = 0, j = a.length-1; i < a.length; i++, j--) {
        left_diagonal += a[i][i];
        right_diagonal += a[i][j];
    }
    console.log(Math.abs(left_diagonal - right_diagonal));
}