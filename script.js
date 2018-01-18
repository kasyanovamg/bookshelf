$(document).ready(function(){

//toggles add/edit form
var open_book_edit = $("#edition_field");
$("#add_book").click(function(){
    open_book_edit.toggle(400);
    clear();
});

//clears all inputs
function clear () {
	$("#book_name").val("");
	$("#author_name").val("");
	$("#year").val("");
	$("#pic").val("");
}

//listens to event of cancel button
$("#cancel_book").click(function() {
	clear();
	open_book_edit.hide(400);
});





});