  $(document).ready(function(){
    $('.slider').slider();
    $.ajax("/api/hosts/", {
      type: "GET",
    }).then(
    function (result) {
      console.log(result);
      for (var i=0; i<=result.length; i++){
        //console.log("EVENT ->" + result[i].firstname);
        console.log("EVENT -> " + i + " CUISINE " + result[i].cuisine);
        console.log("EVENT -> " + i + " DATE " + result[i].date);
        console.log("EVENT -> " + i + " CHARITY " + result[i].charity);
        console.log("EVENT -> " + i + " COUNT " + result[i].peoplecount);

        var card = $("<div>");
        card.addClass("col s4 m4");
        card.addClass("card");


        var imageDiv = $("<div>");
        imageDiv.addClass("card-image waves-effect waves-block waves-light");


        var image = $("<img>");
        image.addClass("activator");
        image.attr("src", result[i].image);

        var cardContent = $("<div>");
        cardContent.addClass("card-content");
        cardContent.attr("id", "eventinfo");
        cardContent.attr("eventid", result[i].id);
        cardContent.append("Charity: " + result[i].charity);
        cardContent.append("<br>");
        cardContent.append("Cuisine: " + result[i].cuisine);
        cardContent.append("<br>");
        cardContent.append("Date: " + result[i].date);
        cardContent.append("<br>");
        cardContent.append("Seats Remaining: " + result[i].peoplecount);
        cardContent.append("<br><br>");

        var revealSpan = $("<span>");
        revealSpan.addClass("card-title activator grey-text text-darken-4");
        revealSpan.text("Click here to Register");
        revealSpan.append("<br><br>");

        var submitButton = $("<button>");
        submitButton.attr("type", "submit");
        submitButton.addClass("btn btn-primary btn-lg btn-block");
        submitButton.attr("id", "guestlist");
        submitButton.text("Guest List");

///////////////
       
        var cardReveal = $("<div>");
        cardReveal.addClass("card-reveal")

        var titleSpan = $("<span>");
        titleSpan.addClass("card-title grey-text text-darken-4");
        titleSpan.text("Card Title");

        var formRow = $("<div>");
        formRow.addClass("row");

        var form = $("<form>");
        form.addClass("col s12");

        var formRow2 = $("<div>");
        formRow2.addClass("row");

        var nameDiv = $("<div>");
        nameDiv.addClass("input-field col s6");

        var nameInput = $("<input>");
        nameInput.attr("id", "first_name");
        nameInput.attr("type", "text");
        nameInput.addClass("validate");

        var nameLabel = $("<label>");
        nameLabel.attr("for", "first_name");
        nameLabel.text("First Name");

        var lastnameDiv = $("<div>");
        lastnameDiv.addClass("input-field col s6");

        var lastnameInput = $("<input>");
        lastnameInput.attr("id", "last_name");
        lastnameInput.attr("type", "text");
        lastnameInput.addClass("validate");

        var lastnameLabel = $("<label>");
        lastnameLabel.attr("for", "last_name");
        lastnameLabel.text("Last Name");

        var formRow3 = $("<div>");
        formRow3.addClass("row");

        var emailDiv = $("<div>");
        emailDiv.addClass("input-field col s12");

        var emailInput = $("<input>");
        emailInput.attr("id", "email");
        emailInput.attr("type", "email");
        emailInput.addClass("validate");

        var emailLabel = $("<label>");
        emailLabel.attr("for", "email");
        emailLabel.text("Email");

        var formRow4 = $("<div>");
        formRow4.addClass("row");

        var phoneDiv = $("<div>");
        phoneDiv.addClass("input-field col s12");

        var phoneInput = $("<input>");
        phoneInput.attr("id", "phone");
        phoneInput.attr("type", "text");
        phoneInput.addClass("validate");

        var phoneLabel = $("<label>");
        phoneLabel.attr("for", "phone");
        phoneLabel.text("Phone");

        var formRow5 = $("<div>");
        formRow5.addClass("row");

        var eventDiv = $("<div>");
        eventDiv.addClass("input-field col s12");

        var eventInput = $("<input>");
        eventInput.attr("id", "event");
        eventInput.attr("type", "text");
        eventInput.addClass("validate");

        var eventLabel = $("<label>");
        eventLabel.attr("for", "event");
        eventLabel.text("Event");

        var registerButton = $("<button>");
        registerButton.attr("type", "submit");
        registerButton.addClass("btn btn-primary btn-lg btn-block");
        registerButton.attr("id", "register");
        registerButton.text("Register");



        imageDiv.append(image);
        card.append(imageDiv);
        
        cardContent.append(revealSpan);
        cardContent.append(submitButton);


        card.append(cardContent);

        
        nameDiv.append(nameInput);
        nameDiv.append(nameLabel);
        lastnameDiv.append(lastnameInput);
        lastnameDiv.append(lastnameLabel);
        
        formRow2.append(nameDiv);
        formRow2.append(lastnameDiv);

        emailDiv.append(emailInput);
        emailDiv.append(emailLabel);

        formRow3.append(emailDiv);

        phoneDiv.append(phoneInput);
        phoneDiv.append(phoneLabel);

        formRow4.append(phoneDiv);

        eventDiv.append(eventInput);
        eventDiv.append(eventLabel);

        formRow5.append(eventDiv);



        form.append(formRow2);
        form.append(formRow3);
        form.append(formRow4);
        form.append(formRow5);
        formRow.append(form);
        cardReveal.append(titleSpan);
        cardReveal.append(formRow);
        cardReveal.append(registerButton);

        card.append(cardReveal);

        







        $("#eventCards").append(card);  
      }
    }
    );

  });
  
  $("#register").on("click", function (event) {
    event.preventDefault();
    console.log("HERE");
    var newGuest = {
      first_name: $("#first_name").val(),
      last_name: $("#last_name").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      event: $("#event").val()
    };

    console.log(newGuest);


// Send the PUT request.


$.ajax("/api/guests/", {
  type: "POST",
  data: newGuest
}).then(
function (res) {
  console.log(res);
        //the below isn't console.logging
        console.log("added new guest: ", newGuest);
        // Reload the page to get the updated list
        location.reload();
      }
      );
    //clear form
    $("#first_name").val(""),
    $("#last_name").val(""),
    $("#email").val(""),
    $("#phone").val(""),
    $("#event").val()
  });















