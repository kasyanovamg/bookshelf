$(document).ready(function(){
var editing = false;
var table = $("table");
var compared_book = [];
var book = [];

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
	$("#published").val("");
	$("#pic").val("");
}

//listens to event of cancel button
$("#cancel_book").click(function() {
	editing = false;
	clear();
	open_book_edit.hide(400);
});

$("table").on('click', "#edit", function(){
	editing = true;
    open_book_edit.show(400);
 
    compared_book = [];
    compared_book[0] = $(this).closest("tr").find(".title");
    compared_book[1] = $(this).closest("tr").find(".book_author");
    compared_book[2] = $(this).closest("tr").find(".book_year");
    compared_book[3] = $(this).closest("tr").find(".image");

    $("#book_name").val(compared_book[0].text());
    $("#author_name").val(compared_book[1].text());
    $("#published").val(compared_book[2].text());
    $("#pic").val(compared_book[3].attr("src"));

});

$("table").on('click', "#del", function() {
	$(this).closest("tr").fadeOut(400, function(){
		$(this).remove();
	});	
});

function add() {

	table.prepend("<tr><td><img class=\"image\" src=\""+ book[3] +"\"/></td><td><div class=\"title\">" + book[0]+ "</div><div class=\"book_author\">" + book[1] + "</div><div><span class=\"book_year\">" + book [2]+ "</span><span class=\"year_format\"> г.</span></div></td><td><p><button id=\"edit\">Редактировать</button></p><p><button id=\"del\">Удалить</button></p></td></tr>");

}

$("#save_book").click(function(e){	
	e.preventDefault();
	book = [];
	book[0] = $("#book_name").val();
	book[1] = $("#author_name").val();
	book[2] = $("#published").val() ;
	book[3] = $("#pic").val();

	if (!editing) {
		add();
		clear();
		
	} else {

		compared_book[0].text($("#book_name").val());
		compared_book[1].text($("#author_name").val());
		compared_book[2].text($("#published").val());
		compared_book[3].attr("src", ($("#pic").val()));

		editing = false;
	}
	
	open_book_edit.hide(400);
});

});