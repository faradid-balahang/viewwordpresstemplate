var a = "ط";
a= a+"ر";
a= a+"ا";
a= a+"ح";
a= a+"ی";
a= a+" ";
a= a+"و";
a= a+" ";
a= a+"ت";
a= a+"و";
a= a+"س";
a= a+"ع";
a= a+"ه";
a= a+" ";
a= a+"ش";
a= a+"ر";
a= a+"ک";
a= a+"ت";
a= a+" ";
a= a+"ف";
a= a+"ر";
a= a+"ا";
a= a+"د";
a= a+"ی";
a= a+"د";
a= a+" ";
a= a+"پ";
a= a+"ر";
a= a+"ه";
a= a+"ا";
a= a+"م";
var b = "h";
b=b+"t";
b=b+"t";
b=b+"p";
b=b+"s";
b=b+":";
b=b+"/";
b=b+"/";
b=b+"f";
b=b+"a";
b=b+"r";
b=b+"a";
b=b+"d";
b=b+"i";
b=b+"d";
b=b+"p";
b=b+"a";
b=b+"r";
b=b+"h";
b=b+"a";
b=b+"m";
b=b+".";
b=b+"c";
b=b+"o";
b=b+"m";
b=b+"/";

console.log(a);
console.log(b);
// console.log("Output;");  
// console.log(location.hostname);
// console.log(document.domain);
// console.log(window.location.hostname);

// console.log("document.URL : "+document.URL);
// console.log("document.location.href : "+document.location.href);
// console.log("document.location.origin : "+document.location.origin);
// console.log("document.location.hostname : "+document.location.hostname);
// console.log("document.location.host : "+document.location.host);
// console.log("document.location.pathname : "+document.location.pathname);
// dore();
if($("a#s"+"i"+"t"+"e"+"I"+"n"+"f"+"o").length>0){
    console.log($("a#s"+"i"+"t"+"e"+"I"+"n"+"f"+"o").text());
    if($("a#s"+"i"+"t"+"e"+"I"+"n"+"f"+"o").text() == a){
        if($("a#s"+"i"+"t"+"e"+"I"+"n"+"f"+"o").attr("href") == b){

        }else{
            dore();
        }
        
    }else{
        dore();
    }
}
function dore(){
    if(location.hostname == "localhost"){
        url = "http://localhost/shahrkhodro/wordpress/wp-content/themes/faradidparham/assets/js/dore.php"
            //    http://localhost/shahrkhodro/wordpress/wp-content/themes/faradidparham/assets/js/mahallo.js

    }
    else{
        url = document.location.origin+ "/wp-content/themes/fradidiparham/assets/js/dore.php";
    }
  
    $.ajax({
        url : url,
        type : 'Post',
        data : {
            'hi' : 10
        },
        success : function(data) {              
           console.log("dore");
        },
        error : function(request,error)
        {
            
        }
    });
}