//Example 01
<script type="text/javascript">
    var money;
    var name;
</script>

//Example 02
<script type="text/javascript">
     var money, name;
</script>

//Example 03
<script type="text/javascript">
    var name = "Ali";
    var money;
    money = 2000.50;
</script>

//Example 04
<html>
	<body onload = checkscope();>
		<script type = "text/javascript">
			var myVar = "global"; // Declare a global variable
			function checkscope()
			{
				var myVar = "local"; // Declare a local variable
				document.write(myVar);
			}
		</script>
    </body>
</html>