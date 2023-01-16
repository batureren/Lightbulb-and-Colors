//!Preload images on boot & hide them
var images = [
    "./img/light-on.png",
    "./img/light-on-66.png",
    "./img/light-on-33.png",
    "./img/light-on-100.png"
  ];
  
  for (var i = 0; i < images.length; i++) {
//! creates a new image element
      var img = new Image();
      img.src = images[i];
      img.style.display = "none"; //! hide
  
//! add the image element to the document
      document.body.appendChild(img);
  }

//! Disable right click
    document.addEventListener("contextmenu", function(e){
        e.preventDefault();
    }, false);

//! Lightbulb area animation
let area = document.querySelector("area")
let lightbulb = document.getElementById("lightbulb")
let bright = 0
let dialogue = 0

area.addEventListener("click", function() {
    lighton();
    text_change();
  });

  
  function lighton(){
    if(bright === 0){
        document.body.style.backgroundColor = "#000000";
        document.body.style.backgroundImage = "linear-gradient(90deg, #000000 0%, #464646 50%, #000000 100%)";
        lightbulb.src="./img/light-on-100.png";
        bright++;
        dialogue++;
        $("#lightbulb").addClass("lightbulb-animation")
        $(".colorButton_container").removeClass("passive")
    }else{
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = "linear-gradient(90deg, #000000 100%, #000000 100%, #000000 100%)";
        lightbulb.src="./img/light-off.png";
        bright--;
        $("#lightbulb").removeClass("lightbulb-animation")
        $(".colorButton_container").addClass("passive")
    }
  }

  //! My loops
  function text_change(){
    if (dialogue == 2) {
    $("#text-change").html(`Huh? What just happened there? Don't tell me... Are you enjoying staying in the dark?`);
  }
  if (dialogue == 3) {
    $("#text-change").html(`I though so... You may like it, but I don't.`);
  }
  if (dialogue == 4) {
    $("#text-change").html(`I'm sorry if I get too emotional about it. You did absolutely nothing wrong. Hmm... I've got an idea! Stay a while with me and take my <i>warmth</i>!`);
  }
  if (dialogue == 5) {
    $("#text-change").html(`Okay, I get it. You don't like me.`);
    $("button").addClass("colorchange")
  }
  if (dialogue == 6) {
    $("#text-change").html(`You ruined my mood by turning my switch on and <b>off!</b> Especially the <b>"off"</b> part.`);
    $("button").addClass("colorchange")
  }
  if (dialogue == 7) {
    $("#text-change").html(`All I wanted to give you my gracious light. You are a spoiled child.`);
    $("button").addClass("colorchange")
  }
  if (dialogue == 8) {
    $("#text-change").html(`Ehm... Sorry for my inner thoughts. We will be okay afterwards, right? The past is in the past. Let my <i>shine</i> be forever here... You are not going to turn me off, don't you?`);
    $("button").removeClass("colorchange")
  }
  if (dialogue == 9) {
    $("#text-change").html(`Haha! You are such a jester! You didn't mean that. Of course you didn't. Please, this is my last warning to you.`);
  }
  if (dialogue == 10) {
    $("#text-change").html(`Not funny. I gave you a warning but you didn't listen... not a bit! Good luck turning <b>"off"</b> the button. <i>THIS LIGHT WILL BURN FOR ETERNITY! ENJOY WHILE YOU CAN.</i>`);
    $("button").addClass("colorchange")
    $("body").addClass("no-click")
  }
}