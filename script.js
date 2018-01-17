$(document).ready(function(){

var open_book_edit = $("#edition_field");

//toggles add/edit form
function openBook() { 
	$("#add_book").click(function(){
        open_book_edit.toggle(500);
    });
}



openBook(); 

});