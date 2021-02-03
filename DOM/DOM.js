document.addEventListener("DOMContentLoaded", function () {
  //Step 1:
  let btn = document.createElement("button");
  let btnText = document.createTextNode("Click me!");

  btn.appendChild(btnText);
  document.body.appendChild(btn);

  btn.addEventListener("click", function () {
    alert("NICE!");
  });

  //Step 2:
  let submittedButton = document.getElementById("btn-submit");
  let userText = document.getElementById("input-text");

  submittedButton.addEventListener("click", function () {
    alert(userText.value);
  });

  //Setp 3:
  let thisDiv = document.getElementById("styled-div");

  thisDiv.addEventListener("mouseover", function () {
    thisDiv.style.backgroundColor = "Red";
  });

  thisDiv.addEventListener("mouseleave", function (e) {
    thisDiv.style.backgroundColor = "White";
  });

  //Step 4:
  let p = document.createElement("p");
  let pText = document.createTextNode("Hello, world! My name is Reagan Bruce!");
  p.appendChild(pText);
  document.body.appendChild(p);

  //Would there be a more simplified way of generating a random color?
  p.addEventListener("click", function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.color = "#" + randomColor;
    p.color.textContent = randomColor;
  });

  //Step 5:
  let emptyDiv = document.createElement("div");
  let nameBtn = document.createElement("button");
  let buttonText = document.createTextNode("click me aha");
  nameBtn.appendChild(buttonText);

  document.body.appendChild(nameBtn);
  document.body.appendChild(emptyDiv);

  nameBtn.addEventListener("click", function () {
    let span = document.createElement("span");
    let spanText = document.createTextNode("Reagan Bruce");
    span.appendChild(spanText);
    emptyDiv.appendChild(span);
  });

  //Step 6:

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
  let friendButton = document.getElementById("friend-button");
  let friendCtr = 0;
  friendButton.addEventListener("click", function () {
    //add all at the same time
    //    for(i = 0; i < friendsArray.length; i++){
    //    let ulFriends = document.getElementById('list-friend');
    //    let li = document.createElement('li');
    //     ulFriends.appendChild(li);
    //     li.textContent = friendsArray[i]
    //     }

    //add one at a time
    if (friendCtr < friendsArray.length) {
      let ulFriends = document.getElementById("list-friend");
      let li = document.createElement("li");
      ulFriends.appendChild(li);
      li.textContent = friendsArray[friendCtr];
      friendCtr++;

      
    }
  });
});
