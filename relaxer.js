"use strict";

const images = [
  "images/plants.jpeg",
  "images/sunset.jpeg",
  "images/5milehill.jpeg",
];
const hexColorPattern = new RegExp("^#([A-Fa-f0-9]{6})$");

$(document).ready(() => {
    setInterval(() => {
  $("#relax").animate({ right: "-=640" }, 6000);
  $("#relax").animate({ top: "+=400" }, 6000);
  $("#relax").animate({ right: "+=640" }, 6000);
  $("#relax").animate({ top: "-=400" }, 6000);
}, 100);
  let imageCounter = 0;

  setInterval(() => {
    $("#slide").fadeOut(5000, () => {
      imageCounter = (imageCounter + 1) % images.length;
      $("#slide").attr("src", images[imageCounter]).fadeIn(5000);
    });
  }, 100);
  $("#cbutton").click(() => {
    let lColor = $("#color1").val();
    let rColor = $("#color2").val();

    if (
      hexColorPattern.test(lColor) == false ||
      hexColorPattern.test(rColor) == false
    ) {
      $("#color1").val("");
      $("#color2").val("");
    } else {
      document.body.style.backgroundColor = lColor;
      document.getElementById("main").style.borderColor = rColor;

      $("#color1").val(rColor);
      $("#color2").val(lColor);
    }
  });
});
