var arr=[];
var arr1=[];
$(function() {
	loaddata();
	$("#btnAddTodo").click(function(e) 
	{
			var value=append();
			arr.push({text:value,state:false});
			savedata();
		}
	);

	$("#txtTodo").keyup(function(e) {
		if(e.keyCode == 13) {
			value = $(this).val();
			if(value != "") {
				$("#btnAddTodo").click();
			}
		}
	});

	$(document.body).on('click', ".todo-checkbox", function() 
	{

		var d=$(this).parents(".todo-holder").attr("data-id");
			console.log(d);
		if($(this).is(":checked")) {
			$(this).next(".todo").css("text-decoration", "line-through");
			
			arr[d].state=true;
		} else {
			$(this).next(".todo").css("text-decoration", "none");
			arr[d].state=false;
		}
		//getdataid();
		savedata();
	});

	
});