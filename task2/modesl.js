
var oldt=0;

function model(){
	var model=function(){};
this.save = function(arr) 
    {
        $.ajax({
	    url: 'http://localhost:3030/chat/'+arr.timestamp, 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(arr),
		success:function(res){console.log(res);}
	
	});
   
    };


      this.loader=function()
    {

    	$.get('http://localhost:3030/chat',function(res)
		 	{
		 		if(!$.isEmptyObject(res))
		 		{console.log(res);
		 			if(!$.isEmptyObject(res))
		 			{
		 			arr=res;}
		 			//$("#data").empty();
		 			for (var i in arr)
		 			{if(arr[i].timestamp>oldt){
		 				var na=arr[i].nick;
		 				var maa=arr[i].msg;
		 				var ts=new Date(arr[i].timestamp);
		 				var time=ts.getHours() + ":" + ts.getMinutes() + ":" + ts.getSeconds();
		 				//na=na.concat(" : ");
		 				//maa=na.concat(maa);
		 				//maa=maa.concat("      "+time);
		 				var sending={"timestamp":time,"nick":na,"msg":maa};
		 				cont.gotData(sending);
		 			}
		 			}oldt=arr[i].timestamp;
		 		}

});

    };

};
var mo=new model();
 setInterval(function()
{
mo.loader();
}
 	,5000);