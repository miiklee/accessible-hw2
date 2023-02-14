$(document).ready(function() {
  

  // Form validation
  $("#signupbutton").click(function() {
    if($("#fn").val()=="" || $("#ln").val()=="") {
      var paragraph = document.getElementById("name");
      var text = document.createTextNode("****");
      paragraph.appendChild(text);
      $("#name").addClass("error");
      return;

    } else {
      $("#name").removeClass("error");
      var paragraph = document.getElementById("name");
      var no_stars = document.createTextNode("Name:");
      paragraph.replaceWith(no_stars)
    }

    if($("#em").val()==""){
      var paragraph = document.getElementById("email");
      var text = document.createTextNode("****");
      paragraph.appendChild(text);
      $("#email").addClass("error");
      return;

    } 
    
    else {
      $("#email").removeClass("error");
      var paragraph = document.getElementById("email");
      var no_stars = document.createTextNode("Email:");
      paragraph.replaceWith(no_stars)
    }

    alert("Thank you! Please watch your email for our exciting newsletter and offers!");


  });

});


