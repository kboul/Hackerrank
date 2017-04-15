function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    // Write Your Code Here
    var alice = 0,
    bob = 0,
    aliceArray = [a0,a1,a2],
    bobArray = [b0,b1,b2];
    
    for (var i =0; i < aliceArray.length; i++) {
        if (aliceArray[i] > bobArray[i]) {
            alice++;
        }
        else if (aliceArray[i] < bobArray[i]) {
            bob++;
        }
    }
    console.log("" + alice +" "+ bob);
}