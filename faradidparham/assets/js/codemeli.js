function codemeli(codemelis){
    var codemelis = codemelis;
    var codemelisLength = parseInt(codemelis.length);
    var slicse =0;
    var number =0;
    var position = 0;
    var sum = 0;
    codemelis = parseInt(codemelis);
    if(codemelisLength<10){
        var howmemeny = 10 - codemelisLength;
        for (let i = 0; i < howmemeny; i++) {
            codemelis = "0" + codemelis;
          }
    }
    codemelisLength = parseInt(codemelis.length);
    for (let i = 0; i < codemelisLength; i++) {
       slicse   = codemelisLength - (i+2);    
       number   =  codemelis.slice(slicse); 
       position = slicse;
       sum = sum+(number*position);
       console.log(sum);
    }
    if(sum>11){
        divide = parseInt(sum/11);
        if(divide<2){
           check= codemelis.slice(codemelisLength-1); 
           if(divide == check){
               console.log("hgi");
           }
        }
    }


}
codemeli(1756000441);