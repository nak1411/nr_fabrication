//Change/show text
var tag = document.querySelector("body");
console.log(tag.textContent);

//Selecting and changing elements/style
var h1 = document.querySelector("h1");
h1.style.color = "blue";


//Changing attributes
var link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "http://www.google.com");

//Select and change all links with loop
var links = document.getElementsByTagName("a");
for (var i = 0; i < links.length; i++){
  links[i].setAttribute("href", "http://www.google.com");
}

//Attach listener to h1 listening for click events.  Toggle color
var h1Button = document.querySelector("h1");
var isBlue = false;
h1Button.addEventListener("click", function(){
  if (isBlue) {
    h1.style.color = "red";
  } else{
    h1.style.color = "blue";
  }
  isBlue = !isBlue;
});

