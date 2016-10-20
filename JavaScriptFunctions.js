Example 01
<script type="text/javascript">
	function functionname(parameter-list)
	{
		statements
    }
</script>

Example 02
<script type="text/javascript">
	function sayHello()
    {
		alert("Hello there");
    }
</script>

Example 03
<html>
	<head>
		<script type="text/javascript">
			function sayHello()
			{
				document.write ("Hello there!");
			}
		</script>
    </head>
	<body>
		<p>Click the following button to call the function</p>
		
		<form>
			<input type="button" onclick="sayHello()" value="Say Hello">
		</form>
      
		<p>Use different text in write method and then try...</p>
   </body>
</html>

Example 04
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