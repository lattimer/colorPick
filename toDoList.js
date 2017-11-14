//alert("JS script loaded");

var todoInput = document.getElementById("todoInput");
var todoBtn = document.getElementById("todoBtn");

$(todoBtn).on("click", function(){
	addListItem();
})

$(todoInput).on("keydown", function(e) {
	if(e.keyCode == 13) {
		addListItem();
	}
})

function addListItem() {
	//if ($(todoInput).val() === "") {
	//	break;
	//}
	var lineItem = document.createElement("div");
	$(lineItem).addClass("listItem");
	$(lineItem).text($(todoInput).val());
	$(lineItem).on("click", function() {
		$(this).toggleClass("strike");
	})

	$(lineItem).on("dblclick", function() {
		$(this).remove();
	})
	$("body").append(lineItem);

	clearTextField();
	
	//$(item).text($(todoInput).val())
}

function clearTextField() {
	$(todoInput).val("");
}