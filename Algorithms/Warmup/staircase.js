function main() {
    var n = parseInt(readLine());
    var line = Array(n + 1).fill(' ');
    for (var i = n - 1; i >= 0; i--) {
        line[i] = '#';
        console.log(line.join(''));
    }
}