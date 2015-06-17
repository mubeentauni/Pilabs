function datahandler () {
   var datahandler=function(){};
    this.save = function(arr) 
    {
        $.ajax({
	    url: 'http://datastore.asadmemon.com/chat/'+arr.timestamp, 
	    type: 'POST', 
	    contentType: 'application/json', 
	    data: JSON.stringify(arr),
		success:function(res){console.log(res);}
	
	});
   
    };

    this.loader=function(arr)
    {

    	$.get('http://datastore.asadmemon.com/chat/',function(res)
		 	{
		 		if(!$.isEmptyObject(res))
		 		{console.log(res);
		 			if(!$.isEmptyObject(res))
		 			{
		 			arr=res;}
		 			$("#data").empty();
		 			for (var i in arr)
		 			{
		 				var na=arr[i].nick;
		 				var maa=arr[i].msg;
		 				var ts=new Date(arr[i].timestamp);
		 				var time=ts.getHours() + ":" + ts.getMinutes() + ":" + ts.getSeconds();
		 				//na=na.concat(" : ");
		 				//maa=na.concat(maa);
		 				//maa=maa.concat("      "+time);
		 				var div=$('<div>'+na + maa + time +'</div>');
		 				$("#data").append(div);
		 			}
		 		}

});

    };

    this.inputdata=function(ni){

    		var input=$("#msg").val();
	var t=new Date().getTime();
	 var nick=ni;
	var temp={"timestamp":t,"msg":input,"nick":nick};
	console.log(temp);
	return temp;
    };

    this.nick=function(){
    	var nicky=$("#nick").val();
		return nicky;


    };

}