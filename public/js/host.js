// $(function(){

  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

  $('.timepicker').pickatime({
    default : 'now', // Set default time: 'now', '1:30AM', '16:30'
    fromnow: 0,       // set default time to * milliseconds from now (using with default = 'now')
    twelvehour: false, // Use AM/PM or 24-hour format
    donetext: 'OK', // text for done-button
    cleartext: 'Clear', // text for clear-button
    canceltext: 'Cancel', // Text for cancel-button
    autoclose: false, // automatic close timepicker
    ampmclickable: true, // make AM PM clickable
    aftershow: function(){} //Function for after opening timepicker
  });

  




  $("#submit").on("click", function(event){
    event.preventDefault();
      
    var newHost = {
        firstname: $("#first_name").val(),
        lastname:$("#last_name").val(),
        cuisine:$("#cuisine").val(),
        image:$("#image").val(),
        charity:$("#charity").val(),
        email:$("#email").val(),
        address:$("#address").val(),
        date:$("#date").val(),
        peoplecount:$("#peoplecount").val()
       };

       console.log(newHost);

    // Send the PUT request.
      
      
     $.ajax("/api/hosts/", {
      type: "POST",
      data: newHost
    }).then(
      function (res) {
        console.log("This is the new host" + res);
        console.log("added new host to host: ", newHost);

    // var card = $("<div>");
    // card.addClass("card-image waves-effect waves-block waves-light");

    // var cardImage = $("<div>");
    // cardImage.addClass("card-image ");
    
    // var image = $("<img>");
    // image.attr("src", "images/manakeesh2.JPG");
    
    // var cardContent = $("<div>");
    // cardContent.addClass("card-content");
    // cardContent.attr("id", "eventinfo");
    // cardContent.text("Host: " newHost.first_name);
    // cardContent.append("<br>");
    // cardContent.text("Cuisine: " newHost.cuisine);
    // cardContent.append("<br>");
    // cardContent.text("Date: " newHost.date);
    // cardContent.append("<br>");
    // cardContent.text("Seats Remaining: " newHost.peoplecount);
    // cardContent.append("<br>");

    // var revealSpan = $("<span>");
    // revealSpan.addClass("card-title activator grey-text text-darken-4");
    
    
    //  cardImage.append(image);
    //  card.append(cardImage);
    //  card.append(cardContent);

    //  $("event").append(card);  

    // Reload the page to get the updated list
      location.reload();
});


 //send the POST request
//  $.ajax("/api/hosts", {
//    type: "POST",
//    data: newHost

//  }).then(function(){
//    console.log("created new host++++++++========");
    
//   location.reload();
//   });       
  });

  //clear form
       $("#first_name").val(""),
        $("#last_name").val(""),
        $("#cuisine").val(""),
        $("#charity").val(""),
        $("#email").val(""),
        $("#address").val(""),
        $("#date").val(""),
        $("#peoplecount").val("")


 

// });//end of iife














