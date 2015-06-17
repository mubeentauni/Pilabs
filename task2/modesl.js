function model(){
	var model=function(){};
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

};