function ok() {
    alert('你好吗？');
}

var carName="Volvo";
document.getElementById("demo1").innerHTML = carName;

function getStringCode(){
    var name='daniel';
   var code=name.toUpperCase();
   alert(code);
}

//js捕获异常
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

a = 5;
b = 6;
c = a + b;
console.log(c);


//js操作json
var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj = JSON.parse(text);

document.getElementById("demo").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;


//函数自调用
// (function () {
//     document.getElementById("demo2").innerHTML = "Hello! 我是自己调用的";
// })();

//函数作为方法调用
var myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById("demo4").innerHTML = myObject.fullName();

//函数闭包
var add = (function () {
    var counter = 0;
    return function () {
        return counter += 1;
    }
})();

function myFunction() {
    document.getElementById("demo5").innerHTML = add();
}