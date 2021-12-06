
function myFunction() {
    var x = document.getElementById("Relationshipquotes");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";}
        var x = document.getElementById("Inspirationalquotes");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }}

function validateForm()
        {
        var x=document.forms["nameofform"]["emailid"].value;
        var atpos=x.indexOf("@");
        var dotpos=x.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
         {
         alert("Enter a Valid Email Address");
         return false;
         }
        }


        

       