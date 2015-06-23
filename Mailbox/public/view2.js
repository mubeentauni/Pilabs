 function updateUi()
{
	
	this.goGogo=function(data)
	{
		 var from=$('<div><p class="bg-info">' + ' '+data.to +'</p></div>');
		 	var subject=$('<div><p class="bg-info">' +' ' +data.subject +'</p></div>' );
		 	var message=$('<div><p class="bg-info">' +' '	+data.message + '</p></div>');
		 	var timestamp=new Date(data.timestamp);
		 	var dt=timestamp.getHours() +":" + timestamp.getMinutes();

		 	var inb=$('<a href="#" class="list-group-item"><span class="glyphicon glyphicon-star-empty"></span><span class="name" style="min-width: 120px;display: inline-block;">'+data.to+'</span> <br><span class="">'+data.subject+'</span><span class="text-muted" style="font-size: 11px;">- '+data.message+'</span> <span class="badge">'+dt+'</span> <span class="pull-right"><span class="glyphicon glyphicon-paperclip"></span></span></a>');
		 				//$("#time").append(dt);
		 				//$("#from").append(from);
		 				//$("#subject").append(subject);
		 				//$("#message").append(message);
		 				$(".inbox").append(inb);
}

}
var ui=new updateUi();

