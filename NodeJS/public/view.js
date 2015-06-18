function view(){

this.appender=function(data){

	var div=$('<div>'+data.nick + ": "+data.msg+"  " + data.timestamp +'</div>');
		 				$("#data").append(div);
}

this.collect=function(ni){
	var input=$("#msg").val();
	var t=new Date().getTime();
	 var nick=ni;
	var temp={"timestamp":t,"msg":input,"nick":nick};
	console.log(temp);
	return temp;

}
this.getnick=function(){

	var nicky=$("#nick").val();
		return nicky;
}


};
var nickname;
var vi= new view();
$("#btnAddTodo").click(function()
{
	var ni=$("#nick").val();
	nickname=ni;
	console.log("select btn clicked");
	});
$("#send").click(function()
{
	var msg=vi.collect(nickname);
	//arr.push(msg);
	cont.data(msg);
	});

