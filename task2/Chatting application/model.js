
var arr=[];
var oldt=0;
function Saver()
{
	this.save=function(a)
	{		$.ajax({
	    url: 'http://datastore.asadmemon.com/chat/'+a.timestamp,
 	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(a),
		success:function(res){console.log(res);}
		});
		 
	}
}

var s=new Saver();




function loader()
{
	this.load=function()
	{
		$.get('http://datastore.asadmemon.com/chat',function(res)
		 	{
		 		if(!$.isEmptyObject(res))
		 		{
		 			console.log(res);
		 			arr2=res;
		 			//$("#chatbox").empty();
		 			for(var i in arr2){
		 				if(arr2[i].timestamp>oldt)
		 				{
		 				var chat=arr2[i].msg;
		 				var nick=arr2[i].nick;
		 				
		 				var dt = new Date(arr2[i].timestamp);
		 				var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		 				var sending={"timestamp":time,"nick":nick,"msg":chat};
		 				up.gotData(sending);
		 				
		 				
		 			}

		 		}oldt=arr2[i].timestamp;
		 		}
		 			
	});

	}

 }
 var l=new loader();

 setInterval(function()

{
	l.load(); 
}
 	,5000);
	