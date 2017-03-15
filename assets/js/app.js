// Employee data Management

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDnTlLUQv6LKO26DQ4qXxdprpOWQtNgsa4",
    authDomain: "employee-data-27ce5.firebaseapp.com",
    databaseURL: "https://employee-data-27ce5.firebaseio.com",
    storageBucket: "employee-data-27ce5.appspot.com",
    messagingSenderId: "334827477895"
  };

  firebase.initializeApp(config);


// Create a variable to reference the database.
var database = firebase.database();

var	employeeName = '', role = '', startDate = '', monthlyRate = 0, monthsWorked = 0, totalBilled = 0;


$('#submit').on('click', function() {

	// Capture data from the HTML and push to firebase
	employeeName = $('#employee-name').val();
	role = $('#role').val();
	startDate = $('#start-date').val();
	monthlyRate = $('#monthly-rate').val();

	database.ref().push({
		employeeName: employeeName,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate
	});

	return false;

});


database.ref().on("child_added", function(lastChildSnapshot) {

		console.log(lastChildSnapshot.val());
		var lastObj = lastChildSnapshot.val();
      	employeeName = lastChildSnapshot.val().employeeName;
      	role = lastChildSnapshot.val().role;
      	startDate = lastChildSnapshot.val().startDate;
      	monthlyRate = lastChildSnapshot.val().monthlyRate;

   	$('#employee-table > tbody').append('<tr class="table-data">' +
                    '<td>' + employeeName + '</td>' +
   									'<td>' + role + '</td>' +
   									'<td>' + startDate + '</td>' +
   									'<td>' + monthsWorked + '</td>' +
   									'<td>' + monthlyRate + '</td>' +
   									'<td>' + totalBilled + '</td>' +
                    '</tr>'
   									);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
