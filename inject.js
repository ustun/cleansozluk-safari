var theBody = document.body ;
// create a para and insert it at the top of the body
var element = document.createElement("p");
element.style = "float:right; color:red";
element.textContent = "New Element.";
theBody.insertBefore(element, theBody.firstChild);
