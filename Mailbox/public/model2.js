
var ids=[];


var oldid=0;
function loader()
{
	//$.blockUI({ message: '<h1><img src="busy.gif" /> Just a moment...</h1>' });
		$.get('http://localhost:3002/sent',function(res)
		 	{
		 		if(!$.isEmptyObject(res))
		 		{
		 			console.log(res);
		 			arr2=res;
		 			for(var i in arr2){
		 				if(ids.indexOf(arr2[i]._id)==-1){
		 				
		 				var message=arr2[i].message;
		 				var to=arr2[i].to;
		 				var subject = arr2[i].subject;
		 				var timestamp=arr2[i].timestamp;
		 				var sending={"message":message,"to":to,"subject":subject,"timestamp":timestamp};

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
	