let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

function validatesignup()
	{
		if(document.form1.uname.value.length==0)
		{
			alert("Name Cannot Be Empty");
		}
		if(document.form1.email.value.length==0)
		{
			alert("Email Cannot Be Empty");
		}
		if(document.form1.pass1.value.length==0)
		{
			alert("Password Cannot Be Empty");
		}
		if(document.form1.pass2.value.length==0)
		{
			alert("Please Confirm The Password");
		}
		if(document.form1.pass1.value!=document.form1.pass2.value)
		{
			alert("Password Doesn't Match");
		}
	}
		function validatelogin()
		{
			if(document.form2.uname2.value.length==0)
			{
				alert("Please Enter the Username");
			}
			if(document.form2.passu.value.length==0)
			{
				alert("Please Enter the Password");
			}
		}