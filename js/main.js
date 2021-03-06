 /*
 var mydiv = document.getElementById("mydiv");
 mydiv.innerHTML = "Hello World";
 function myfunc(){
     var mydiv = document.getElementById("mydiv");
     mydiv.innerHTML = "Hello World.";
 };

 window.onload = myfunc();

//initialize function called when the script loads
function initialize(){
    cities();

};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
addColumns(cityPop);
addEvents();
};
 // //get the div id
    var theid = $('#mydiv').attr('id');

 //    //theid is 'mydiv'; add it as text to the div
    $('#mydiv').append(theid);

 //    //add the class 'foo' to the div
    $('#mydiv').attr('class', 'foo');

 //    //change the text color to blue
    $('#mydiv').css('color', 'blue');

 //    //change the text size and alignment
    $('#mydiv').css({
        'font-size': '2em',
        'text-align': 'center'

    });
//iterate over each script element and add each one's source url as text to the div
   $('script').each(function(){
        var thesource = $(this).attr('src');
       $('#mydiv').append(thesource);
    });
   //click listener with anonymous handler function
  $('table').on('click', function(){
        alert('Madison Rocks! Go Badgers!');
  });

   //alias method for the click event listener
  $('table').click(function(){
        alert('Visit Superior and see the big lake!');
    });

   //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
     };

     //add the event listener
     $('table').on('click', clickme);

    //remove the event listener
    $('table').off('click', clickme);

   //get the text color and add it as text to the div
     var thecolor = $('#mydiv').css('color');
   $('#mydiv').append(thecolor);
    
//adds a column for the size of the city
function addColumns(cityPop){
    $('tr').each(function(i){
    	if (i == 0){
    		//gives name to column for city size
    		$(this).append('<th>City Size</th>');
            //if not the fist row then it tries to determine the city size
    	} else {
    		// creates a variable city size to compare
    		var citySize;
    		//conditional of what size city there is and classifies it
            //if the city is under 100,000 in population then classified as small
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    			//S in Size needed to be capitalized
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
// if city pop is larger than 500,000 then considered large
    		} else {
    			citySize = 'Large';
    		};
    		//tried adding () around this; added > to end of td
            //inserts content after going through if statements
    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};
//adds reaponses on the web page to user input and actions
function addEvents(){
	//changes the color when the user mouses over text
	//removed # and made function a funciton of i
	$('table').mouseover(function(i){
	//creates a variable color to later randomly assign a color to
		var color = "rgb(";

		for (var i=0; i<3; i++){
// creates a random color 
			var random = Math.round(Math.random() * 255);
			color += random;
//creates a rgb color using the random number generated.
			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		}
		//moved $(this).css to below the bracket 

	$(this).css("color", color);
    });	
    //adds a function the when you click you are alerted with the below statement 
	function clickme(){
		alert('Hey, you clicked me!');
	}
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
// jQuery('#mydiv').html('Hello World');
function jsAjax(){
    // Step 1: Create the request 
    var ajaxRequest = new XMLHttpRequest();

    //Step 2: Create an event handler to send received data to a callback function
    ajaxRequest.onreadystatechange = function(){
        if (ajaxRequest.readyState === 4){
            //console.log("readyState: ", ajaxRequest.readyState);
            callback(ajaxRequest.response);
        };
    };

    //Step 3: Open the server connection
    ajaxRequest.open('GET', 'data/map.geojson', true);

    //Step 4: Set the response data type
    ajaxRequest.responseType = "json";

    //Step 5: Send the request
    ajaxRequest.send();

};

//define callback function
function callback(response){
    //tasks using the data go here
    console.log(response);
};
$.ajax("data/map.geojson",{
    dataType: "json",
    success: callback
});
//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/map.geojson",{
        dataType: "json",
        success: callback
    });
};
//define callback function
function callback (response, status, jqXHRobject){
    //takss usin ght data fo HEREEEEE!!!!
    console.log(response);
};
$(document).ready(jQueryAjax);

//an AJAX function
function jQueryAjax(){
    var mydata = $.ajax("data/MegaCities.geojson", {
        dataType: "json"
    });
    return mydata;
};

var mydata = jQueryAjax();
console.log(mydata.responseJSON);
console.log(mydata); //the jQuery XMLHttpRequest object

//define AJAX function
function jQueryAjax(){
    //basic jQuery ajax method
    $.ajax("data/map.geojson", {
        dataType: "json",
        success: callback
    });
};

function jQueryAjax(){
    //define a variable to hold the data
    var mydata;

    //basic jQuery ajax method
    $.ajax("data/map.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;

            //check the data
            console.log(mydata);
        }
    });

    //check the data
    console.log(mydata);
};

//define callback function
function callback(response, status, jqXHRobject){

    //TASKS USING THE DATA GO HERE
    console.log(response);

};

$(document).ready(jQueryAjax);

function debugCallback(response){
    
    $(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
};

function debugAjax(){
    
    var mydata;

    $.ajax("data/map.geojson", {
        dataType: "json",
        success: function(response){
            
            debugCallback(mydata);
        }
    });

    $(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
};

$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));

window.onload = jsAjax();
*/
//calls the function initialize to call the debugCallback and debugAjax functions. 
function initialize (){
    //calls the function debugCallback with no parameters taken
    debugCallback();
     //calls the function debugAJAXwith no parameters taken
    debugAjax();
};

function debugCallback(response){
    //mydata changed to response intoder to use the parameter given
    //add a # and quotes around mydiv
    $('#mydiv').append('<br>GeoJSON data: <br>' + JSON.stringify(response));
    
};

function debugAjax(){
    //variable is not needed, not used anywhere or implemented
    //var mydata;
    //finds the geojson file 
    $.ajax("data/map.geojson", {
        //states the data type of file called
        dataType: "json",
        success: function(response){
            //my data changed to response to be passed in as a parameter to debugCallback
            debugCallback(response);
            //prints to console.
            console.log(response);
        }
    });
    console.log(response);
    //changing all mydata to reponse to be passed in as parameters
    //add a # and quotes around mydiv
    //not needaded, already called above
    //$('#mydiv').append('<br>GeoJSON data:<br>' + JSON.stringify(response));
};

//this is not needed, already implemented 2 times
//$(#mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));

//call the initialize function when the document has loaded
$(document).ready(initialize);

