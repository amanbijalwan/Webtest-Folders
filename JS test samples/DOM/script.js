/* var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
    console.log("Its a CLICK! from user..");
})

button.addEventListener("mouseenter", function(){
    console.log("Mouse is here?");
})
*/

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    if(input.value.length > 0)
    {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})

input.addEventListener("keypress", function(){
    if(input.value.length > 0 && event.which === 13)
    {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})