module.exports = function reverse (n) {
    let strN = String(n);
    let strReverse='';
    for(let i = strN.length-1; i>=0; i--){
        strReverse += strN[i];
    }
    return parseInt(strReverse);
}
