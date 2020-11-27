let arrayApoio = [];
let n = 5;

for ( let cont = 1 ; cont <= 5 ; cont +=1 ) {
    arrayApoio.push("");
}

for ( let cnt = (n-1) ; cnt >= 0 ; cnt -=1 ) {
    arrayApoio[cnt] = "*"
    console.log (arrayApoio)
}