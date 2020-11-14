function change(){
document.getElementById("four").src="OIP (5).jpg";
}
function change2(){
document.getElementById("four").src="cocgood.jpg";
}

function validate(){
if(document.make.fname.value=="")
alert("enter your name");

if(document.make.phone.value.length==10 && !isNaN(document.make.phone.value))
return true;
else 
alert("invalid phone number");

var format=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!document.make.email.value.match(format))
alert("invalid email");
if(email=="")
alert("enter email");
}

function text(){
document.getElementById("change2").innerHTML="fill the below form";
}
function text2(){
document.getElementById("change2").innerHTML="Contacts & Inquiries";
}