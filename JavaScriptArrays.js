//Example 01
<script type="text/javascript">

//We initialize the array using the array() constructor.
var first_array = new Array(); 
	first_array[0] = "This is an element";
	first_array[1] = 5;
	first_array[2] = "JavaScript - Tutorial";
	first_array[3] = 16;
	first_array[4] = 7; 

var counter=0; 

//Let's print out the elements of the array.
	for (counter=0; counter<first_array.length; counter++)
		document.write(first_array[counter] + "<br>");
</script>

//Example 02
<script type="text/javascript">

//We declare the first array and pass a single integer as an argument..
var cars = new Array(5);
	cars[0] = "Audi";
	cars[1] = "Bentley";
	cars[2] = "Mercedes";
	cars[3] = "Mini";
	cars[4] = "BMW";

//Now we declare the second array and pass 8 arguments. 
//This technique does not work in JavaScript 1.2.
var flowers = new Array("Rose", 2.45, "Daisy", 1.57, "Orchild", 0.75, "Tulip", 1.15);

var counter=0; 
	document.write("<h1>Elements of the first array:</h1>");

	for (counter=0; counter<cars.length; counter++)
		document.write(cars[counter] + "<br>");

counter=0; 
	document.write("<h1>Elements of the second array:</h1>");

	for (counter=0; counter<flowers.length; counter++)
	{
		if (counter % 2 == 0) {
			document.write(flowers[counter] + " costs ");
	} 
   
	else
	{
		document.write(flowers[counter] + "<br>");
	}
}
</script>

//Example 03
<script type="text/javascript">

var first_array = new Array();
	first_array["key1"] = "the first element";
	first_array["key2"] = "the second element";

var second_array  = new Array(); 
	second_array["key3"] = "this is the first element of the second array"; 
	second_array["key4"] = "this is the second element of the second array";

document.write(first_array["key1"] + "<br>"); //prints "the first element." 
document.write(second_array["key3"] + "<br>"); //prints "the first element of the second array" 
document.write(first_array["key2"] + "<br>"); //prints "the second element" 
document.write(second_array["key4"] + "<br>"); //prints "this is the second element of the second array" 

</script>

//Example 04
<script type="text/javascript">

//We initialize the array using the Array() constructor. 
//Note that for readability one can spread the argument over several lines.
var flower_shop = new Array (); 

	flower_shop["rose"] = "5.00";
	flower_shop["daisy"] = "4.00"; 
	flower_shop["orchid"] = "2.00";

//let's print out the headers to our table
document.write("<table border=\"1\" cellpadding=\"5\">");
document.write("<tr><th>Flower</th><th>Price</th></tr>");

//Now we start the for loop using the variable flower to hold our key.
	for ( var flower in flower_shop) //print the values into a table cell for each iteration
		document.write( "<tr><td>" + flower + "</td><td>" + flower_shop[flower] + "</td></tr>"); 

//finally close the table
		document.write ("</table>");

</script>

//Example 05
<script type="text/javascript">

//Initialize the array using the Array() constructor.
var flower_shop = new Array();

	flower_shop['rose'] = new Array( "5.00", "7 items", "red" );
	flower_shop['daisy'] = new Array( "4.00", "3 items", "blue" );
	flower_shop['orchild'] = new Array( "2.00", "1 item", "white" );

//print "rose costs 5.00, and you get 2 items." 
	document.write( "rose costs " + flower_shop['rose'][0] + ", and you get " + flower_shop['rose'][1] + ".<br>"); 

//print "daisy costs 4.00, and you get 3 items." 
	document.write( "daisy costs " + flower_shop['daisy'][0] + ", and you get " + flower_shop['daisy'][1] + ".<br>"); 

//print "orchild costs 2.00, and you get 1 item. 
	document.write( "orchild costs " + flower_shop['orchild'][0] + ", and you get " + flower_shop['orchild'][1] + ".<br>"); 

</script>