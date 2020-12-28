function validate()
	{
		if(document.form1.uname.value.length==0)
		{
			alert("Please Enter Your Name");
		}
		if(document.form1.uname.value.length==0)
		{
			alert("Please Enter Your Address");
		}
		if(document.form1.phone.value.length==0)
		{
			alert("Please Enter The Phone Number");
		}
		if(isNaN(document.form1.phone.value))
		{
			alert("Please Enter a Valid Phone Number");
		}

		if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form1.email.value))
  						{
    		return true;
  		}
  			
  		

  		if(document.form1.arival.value.length==0)
    	{
    		alert("Please enter the Arrival Date");
    	}
    	if(document.form1.depature.value.length==0)
    	{
    		alert("Please enter the Depature Date");
    	}
    	if(document.form1.adults.value.length==0)
    	{
    		alert("Please enter the Number of Adults");
    	}
    	if(document.form1.kids.value.length==0)
    	{
    		alert("Please enter the Number of Kids");
    	}
    	if(document.form1.nights.value.length==0)
    	{
    		alert("Please enter the Number of Nights at the Hotel");
    	}
    	if(document.form1.view.selectedIndex==0 && document.form1.room.selectedIndex==0)
    	{
    		alert("Please Select a Room");
    	}
    	if(document.form1.view.selectedIndex==1 && document.form1.room.selectedIndex==1)
    	{
    		alert("Please Select  Only One a Room Selection");
    	}
    	if(document.form1.payment.selectedIndex==0)
    	{
    		alert("Please Select A Payament Method");
    	}
    	


		}
