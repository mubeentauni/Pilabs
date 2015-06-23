

var ids=[];


var oldid=0;



function loader()
{
	
		$.get('http://localhost:3002/inbox',function(res)
		 	{
		 		if(!$.isEmptyObject(res))
		 		{
		 			console.log("loader",res);
		 			var arr2=res;
		 			for(var i in arr2){
		 				if(ids.indexOf(arr2[i]._id)==-1){
		 				var message=arr2[i].message;
		 				var from=arr2[i].from;
		 				var subject = arr2[i].subject;
		 				var timestamp=arr2[i].timestamp;
		 				var tempid=(arr2[i]._id);
		 				var sending={"message":message,"from":from,"subject":subject,"timestamp":timestamp,"_id":tempid};

		 				ids.push(arr2[i]._id);
		 				up.gotData(sending);
		 				}
		 				
		 		}
		 		}
		 			
	});

	

 }

 setInterval(function()

{
	loader();
}
 	,10000);
	