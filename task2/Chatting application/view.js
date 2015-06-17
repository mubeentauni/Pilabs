 function updateUi()
{
	
	this.goGogo=function(data)
	{
		 var div=$('<div>'+data.timestamp +" " +data.nick +": " +data.msg + '</div>');
		 				$("#chatbox").append(div);
}
	
}
var ui=new updateUi();

function dataCollector()
{
	this.collect=function()
	{

		var input=$("#input").val();
	var t=new Date().getTime();
	 //t=new Date(t);
	 var nick=$("#nick").val();
	var temp={"msg":input,"nick":nick,"timestamp":t};
	console.log(temp);
	return temp;
	}
}
var d=new dataCollector();

$("#butt1").click(function()
{
	
	var data=d.collect();
	gmd.data(data);
	});
