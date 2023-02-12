$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#spamyn").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#spamyn").val("n");
    }
  });


  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $("#thevideo")[0].pause();
    }
  });

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
      var no_stars = document.createTextNode("Name: ")
      paragraph.replaceWith(no_stars)
    }

    if($("#em").val()=="") {
      $("#email").addClass("error");
      var paragraph = document.getElementById("email");
      var text = document.createTextNode("****");
      paragraph.appendChild(text);

      return;
    } else {
      $("#email").removeClass("error");
      var paragraph = document.getElementById("email");
      var no_stars = document.createTextNode("Email: ")
      paragraph.replaceWith(no_stars)
    }

    alert("Thank you!  Please watch your email for our exciting newsletter and offers!");
  });
});


