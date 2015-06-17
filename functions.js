function loaddata(){
	$.get('http://datastore.asadmemon.com/tauni',function(res){
		
		arr1=res;
		arr=arr1;
		for(var i=0;i<arr.length;i++)
		{

			var asd=$('<div class="todo-holder"><label><input type="checkbox" class="todo-checkbox" /> <span class="todo">'+arr[i].text+'</label></div>');
			asd.attr("data-id",i);
			if(arr[i].state==true)
			{
				$(asd).find(".todo").css("text-decoration", "line-through");
				$(asd).find(".todo-checkbox").prop("checked",true);

			}
			$("#pending-todos").append(asd);
			
		}
		//console.log(res);
	});
}
	function savedata()
	{
		$.ajax({
	    url: 'http://datastore.asadmemon.com/tauni', 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(arr),
		success:function(res){console.log(res);}
	
	});
	}
	function append(){

var value = $("#txtTodo").val();
		if(value !== "") {
			var html=$('<div class="todo-holder"><label><input type="checkbox" class="todo-checkbox" /> <span class="todo">'+value+'</label></div>');
			$("#pending-todos").append(html);
			html.attr("data-id",arr.length);
			$("#txtTodo").val("");
		}
			return value;

}



