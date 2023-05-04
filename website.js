let text = "Save a lot and get the best prices in electronics .. Safe shopping .. Fast shipping .. Payment on receipt .. ";
let index = 0;
function typeWriter() {
    if (index < text.length) {
      document.getElementById("intro").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }
  window.onload = typeWriter;