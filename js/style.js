// Get the modal


// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal


// When the user clicks the button, open the modal 
function one() {
    var modal = document.getElementById('myModal');
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function span() {
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}