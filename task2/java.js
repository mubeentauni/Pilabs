var arr=[];
var nickname;
var d=new datahandler();
$(function() {

$("#btnAddTodo").click(function()
{
	var ni=$("#nick").val();
	nickname=ni;
	console.log("select btn clicked");
	});

$("#send").click(function()
{
	var msg=d.inputdata(nickname);
	arr.push(msg);
	d.save(msg);
	});



 setInterval(function()
{
d.loader(arr);
}
 	,5000);






});