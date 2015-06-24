 function updateUi()
{
	
	this.goGogo=function(data)
	{
		 var from=$('<div><p class="bg-info">' + ' '+data.to +'</p></div>');
		 	var subject=$('<div><p class="bg-info">' +' ' +data.subject +'</p></div>' );
		 	var message=$('<div><p class="bg-info">' +' '	+data.message + '</p></div>');
		 	var timestamp=new Date(data.timestamp);
		 	var dt=timestamp.getHours() +":" + timestamp.getMinutes();
console.log(data.to);
		 	var inb=$('<div class="clk" id='+data._id+' onclick="funcu(this)"> <a  class="list-group-item "><span class="glyphicon glyphicon-star-empty"></span><span class="name" style="min-width: 120px;display: inline-block;">'+data.to+'</span> <br><span class="">'+data.subject+'</span><span class="text-muted" style="font-size: 11px;">- '+data.message+'</span> <span class="badge">'+dt+'</span> <span class="pull-right"><span class="glyphicon glyphicon-paperclip"></span></span></a><div class="showdiv" style="display:none";><label>To</label><input type="text" class="form-control" id="from" name="from" value='+data.to+' disabled="disabled" style="background:black;color:white;"><label>Subject</label><input type="text" class="form-control" id="subject" name="from" value='+data.subject+' disabled="disabled" style="background:black;color:white;"><label>Message</label><input type="text" class="form-control" id="from" name="message" value='+data.message+' disabled="disabled" style="background:black;color:white;"></div></div>');
		 				//$("#time").append(dt);
		 				//$("#from").append(from);
		 				//$("#subject").append(subject);
		 				//$("#message").append(message);
		 				$(".loading").remove();
		 				$(".inbox").append(inb);
}

}
var ui=new updateUi();

function funcu(kuch){
//alert("hi");

//debugger;
$(kuch).find(".showdiv").toggle();


	//var hhh=$('<input type="text" value="3" class="field left" readonly="readonly" >');
	//$(kuch).append(hhh);
	//throw new Error("Something went badly wrong!");
//var abc=$(kuch).attr("id");
//	console.log("abca",abc);
	//var ghn=getfrom(abc);
	//console.log("kisne bheja",ghn);
}