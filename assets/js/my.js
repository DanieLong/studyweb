function ok() {
    alert('你好吗？');
}

var carName="Volvo";
document.getElementById("demo").innerHTML=carName;

function getStringCode(){
    var name='daniel';
   var code=name.toUpperCase();
   alert(code);
}

var txt="";
function message()
{
    try
    {
        adddlert("Welcome guest!");
    }
    catch(err)
    {
        txt="本页有一个错误。\n\n";
        txt+="错误描述：" + err.message + "\n\n";
        txt+="点击确定继续。\n\n";
        alert(txt);
    }
}