// Get the modal
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if(event.target == modal2) {
        modal2.style.display = "none";
    }
}

var list = document.getElementById('products-list');
var list_bar = document.getElementById('list-product');
 function dropdown (){
     list_bar.style.display = "none";
 }

 dropdown();