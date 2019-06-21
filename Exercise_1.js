 
    //====================
    var a = loopUntil(3);
var check = false;
    function loopUntil(x){
            var random;
            var valArray;
        var arrCheck = [];
var a = 1;
var b = 2;
if(x >= 0 && x <= 9){
while(a<b){
        random = Math.round(Math.random()*10);
        
               for(var i = 0 ; i < 3; i++){
        
                arrCheck[i] = random;
                console.log(arrCheck);
                if (arrCheck[i] == arrCheck[i +1] && arrCheck[i] == arrCheck [i +2]){
                        if(arrCheck[i] > x){
                        console.log("match" + arrCheck);
                        a = 3;
                }
        }
        }
      // console.log(arrCheck);
      //console.log(valArray);
}
}
        }



        