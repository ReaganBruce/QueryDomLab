$(document).ready(function () {
  
  
  
    //Step 1:
  $("body").append('<button class="first-button">Click Me</button>');

  
  
  
  //Step 2:
  $(".first-button").click(function () {
    alert("Nice!");
  });




  //Step 3:
  $("#btn-submit").click(function () {
    alert($("#input-text").val());
  });




  //Step 4:
  $(".styled-div").hover(
    function () {
      $(this).css("background-color", "red");
    },
    function () {
      $(this).css("background-color", "white");
    }
  );




  //Step 5:
  $("body").append("<p class='p-class'Hello, my name is Reagan Bruce!</p>");

  $(".p-class").click(function () {
    let colorR = Math.floor(Math.random() * 256);
    let colorG = Math.floor(Math.random() * 256);
    let colorB = Math.floor(Math.random() * 256);
    $(this).css("color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
  });




  //Step 6:
  $("body").append("<button class='name-button'>Click for my name!</button>");
  $("body").append('<div class="name-div"></div>');

  $(".name-button").click(function () {
    $(".name-div").append("<span>Reagan Bruce</span>");
  });


  
  
  //I have no idea why this is effecting the rest of the Elements on the page?????
  //Step 7:
  $("body").append('<button class="button-list">Click for a list of my friends!</button>');
  $("body").append("<ul></ul>");

  const friendsArray = [
    "Reagan",
    "Jake",
    "Rebecca",
    "Jordan",
    "Will",
    "Connor",
    "Monique",
    "Sarah",
    "Hannah",
    "Joni",
  ];
  
  let indexCounter = 0;
  $('.button-list').click(function () {
      $('ul').append('<li>' + friendsArray[indexCounter++] + '</li>')

      if (indexCounter == 10){
          $(this).remove();
       } else {}
  })
  
});
