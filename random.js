//!Preload images on boot
var images = [
    "./img/light-on.png",
    "./img/light-on-66.png",
    "./img/light-on-33.png",
    "./img/light-on-100.png"
  ];
  
  // loop through the images array
  for (var i = 0; i < images.length; i++) {
      // create a new image element
      var img = new Image();
      img.src = images[i];
      img.style.display = "none";
  
      // add the image element to the document
      document.body.appendChild(img);
  }

//! Lightbulb area animation
let area = document.querySelector("area")
let lightbulb = document.getElementById("lightbulb")
let bright = 0

area.addEventListener("click", function() {
    lighton();
  });

  
  function lighton(){
    if(bright === 0){
        document.body.style.backgroundColor = "black";
        lightbulb.src="./img/light-on-100.png";
        bright++;
        $("#lightbulb").addClass("lightbulb-animation")
    }else{
        document.body.style.backgroundColor = "black";
        lightbulb.src="./img/light-off.png";
        bright--;
        $("#lightbulb").removeClass("lightbulb-animation")
    }
  }

  //!