 var choice=1;
 //alert("asdasdadasd");
 function updateUi()
{
	
	this.goGogo=function(data)
	{
		var rep=$('<button type="button" class="btn btn-primary" id="reply" data-toggle="modal" data-target=".bs-example-modal-lg">Reply</button><div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"><div class="modal-dialog modal-lg"><div class="modal-content form-group" style="padding:20px"><form action="/email" method="post" id="email"><input type="hidden" name="to" id="newTo"><label>Enter Subject</label><input class="form-control" type="text" name="subject" placeholder="Enter subject"><label>Enter Email</label><textarea form="email" rows="4" class="form-control" name="message" placeholder="enter email"></textarea><input class="btn btn-primary" type="submit"></form></div></div></div><br><br>');
		 var from=$('<div><p>' + ' '+data.from +'</p></div>');
		 console.log(data.from);
		 	var subject=$('<div><p>' +' ' +data.subject +'</p></div>' );
		 	var message=$('<div><p>' +' '	+data.message + '</p></div>');
		 	var timestamp=new Date(data.timestamp);
		 	var dt=timestamp.getHours() +":" + timestamp.getMinutes();
		 	//alert(data._id);
		 	var inb=$('<div class="clk" id='+data._id+' onclick="funcu(this)"> <a  class="list-group-item "><span class="glyphicon glyphicon-star-empty"></span><span class="name" style="min-width: 120px;display: inline-block;">'+data.from+'</span> <br><span class="">'+data.subject+'</span><span class="text-muted" style="font-size: 11px;">- '+data.message+'</span> <span class="badge">'+dt+'</span> <span class="pull-right"><span class="glyphicon glyphicon-paperclip"></span></span></a><div class="showdiv" style="display:none";><label>From</label><input type="text" class="form-control" id="from" name="from" value='+data.from+' disabled="disabled" style="background:black;color:white;"><label>Subject</label><input type="text" class="form-control" id="subject" name="from" value='+data.subject+' disabled="disabled" style="background:black;color:white;"><label>Message</label><input type="text" class="form-control" id="from" name="message" value='+data.message+' disabled="disabled" style="background:black;color:white;"><button class="reply btn btn-primary" id='+data._id+' onclick="getfrom(this)">Reply</button></div></div><div class="newreply" id='+data._id+'></div>');
		 			//	$("#time").append(dt);
		 			//	$("#from").append(from);
		 			//	$("#subject").append(subject);
		 			//	$("#message").append(message);
		 		//	$("#reply").append(rep);
		 				$(".loading").remove();
		 				$(".inbox").append(inb);
}		

}
var ui=new updateUi();

function funcu(kuch){
//alert("hi");

//debugger;
$(kuch).find(".showdiv").slideToggle();


	//var hhh=$('<input type="text" value="3" class="field left" readonly="readonly" >');
	//$(kuch).append(hhh);
	//throw new Error("Something went badly wrong!");
//var abc=$(kuch).attr("id");
//	console.log("abca",abc);
	//var ghn=getfrom(abc);
	//console.log("kisne bheja",ghn);
}


function getfrom(kuch){
$.get('http://localhost:3002/inbox',function(res)
		 	{
		 			var abc=$(kuch).attr("id");
		 			console.log("kuch kuch hota hia",abc)
		 		if(!$.isEmptyObject(res))
		 		{console.log("in funciton getfrom",abc);

		 			console.log("loader",res);
		 			var arr2=res;
		 			for(var i=0;i<arr2.length;i++){
		 					console.log("  in funciton getfrom",arr2[i].from);
		 					if(abc==arr2[i]._id){
		 						console.log("if may arrr ki val",arr2[i]._id);
		 					console.log(" if may in funciton getfrom",arr2[i].from);
		 					var naya=('<form action="/email" method="post" id="email"><div class="form-group"><label for="name">To</label><input type="email"  class="form-control"  name="to" id="to" value='+arr2[i].from+'><br><label for="name">Subject</label><input type="text" class="form-control" name="subject" placeholder="Enter Subject"><br><label for="email">Email</label><textarea form="email" rows="4" class="col-xs-4 form-control" name="message"></textarea><br><div class="col-xs-9"></div><div class="row"><div class="col-xs-11"></div><input type="submit" class="btn btn-primary" id="smsg" value="Send"><div></div></div></div></form>');
		 					//var rep=$('<button type="button" class="btn btn-primary" id="reply" data-toggle="modal" data-target=".bs-example-modal-lg">Reply</button><div class="modal fade bs-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"><div class="modal-dialog modal-lg"><div class="modal-content form-group" style="padding:20px"><form action="/email" method="post" id="email"><input type="hidden" name="to" id="newTo"><label>Enter Subject</label><input class="form-control" type="text" name="subject" placeholder="Enter subject"><label>Enter Email</label><textarea form="email" rows="4" class="form-control" name="message" placeholder="enter email"></textarea><input class="btn btn-primary" type="submit"></form></div></div></div><br><br>');
		 					$("#"+abc).append(naya);
		 					//$("#newTo").val= arr2[i].from;
		 					//	document.location.href = 'compose.html';
        					//document.getElementById("#to").value=arr2[i].from;
		 						//return arr2[i].from;
		 					}
		 					//return arr2[id].from;
		 			
		 			
		 				
		 		}
		 		}
		 			
	});
}


