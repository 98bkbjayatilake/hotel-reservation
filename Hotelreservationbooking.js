function dovalidate()
{
	if(document.booking.firstname.value.length == 0  || document.booking.lastname.value.length==0)
	{
		alert("Please enter your last name and firstname both");
	}
let Email=document.booking.email.value;
c=Email.indexOf("@");
d=Email.lastIndexOf(".");

 if(c<1 ||(d-c<2))
{
	alert("Please enter valid email address");
}	

if(document.booking.mobilenumber.value.length!==10 || isNaN(document.booking.mobilenumber.value))
 {
alert("Your phone number is invalid");
 }

if(document.booking.single.selectedIndex==0 && document.booking.double.selectedIndex==0 && document.booking.triple.selectedIndex==0)
{
alert("Please select rooms you wish to stay");
}

if(document.booking.guests.selectedIndex==0)
{
alert("Please enter the number of guests wish to stay in the hotel ")
}
let today=new Date();
let startdate=document.booking.arrivaldate.value;
let enddate=document.booking.departuredate.value;

if(today>startdate || today>enddate)
{
	alert("Please enter the possible arrivaldate and departuredate both");
}

if(startdate<enddate){
	alert("Please enter the deaparture date which is there after the arrival date");
}
}