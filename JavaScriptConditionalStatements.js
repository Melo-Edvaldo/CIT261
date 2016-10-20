//Example 01
<script type="text/javascript">
	function checkNumber()
	{
		var n = prompt("Enter a number", "5");
		var entered = "You entered a number between"; 

			if (n >= 1 && n < 10)                   
			{
				alert(entered + " 0 and 10")
			}
			
			else if (n >= 10 && n < 20)
			{
				alert(entered + " 9 and 20")
			}
			
			else if (n >= 20 && n < 30)
			{
				alert(entered + " 19 and 30")
			}
			
			else if (n >= 30 && n < 40)
			{
				alert(entered + " 29 and 40")
			}
			
			else if (n >= 40 && n <= 100)
			{
				alert(entered + " 39 and 100")
			}
			
			else if (n < 1 || n > 100)
			{
				alert("You entered a number less than 1 or greater than 100")
			}
			
			else
			{
				alert("You did not enter a number!")
			}
	}
</script>

//Example 02
<script type="text/javascript">
	function flowerPrice()
	{
		var flower = prompt("What flower do you like", "rose"); 

		switch (flower)
		{
			case "rose" : 
			alert(flower + " costs $2.50");
		break;
		
			case "daisy" : 
			alert(flower + " costs $1.25");
		break;
		
			case "orchild" : 
			alert(flower + " costs $1.50");
			break;
	
		default : 
			alert("There is no such flower in our shop");
			break;
		}
	}
</script>