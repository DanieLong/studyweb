function ok() {
    alert('你好吗？');
}

var carName = "Volvo";
document.getElementById("demo1").innerHTML = carName;

function getStringCode() {
    var name = 'daniel';
    var code = name.toUpperCase();
    alert(code);
}

//js捕获异常
var txt = "";

function message() {
    try {
        adddlert("Welcome guest!");
    }
    catch (err) {
        txt = "本页有一个错误。\n\n";
        txt += "错误描述：" + err.message + "\n\n";
        txt += "点击确定继续。\n\n";
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


//添加监听事件
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo6").innerHTML += "Moused over!<br>"
}

function mySecondFunction() {
    document.getElementById("demo6").innerHTML += "Clicked!<br>"
}

function myThirdFunction() {
    document.getElementById("demo6").innerHTML += "Moused out!<br>"
}

//事件冒泡与事件捕获
/*
addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：
addEventListener(event, function, useCapture);
默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。
 */
document.getElementById("myP").addEventListener("click", function () {
    alert("你点击了 P 元素!");
}, false);
document.getElementById("myDiv").addEventListener("click", function () {
    alert(" 你点击了 DIV 元素 !");
}, false);
document.getElementById("myP2").addEventListener("click", function () {
    alert("你点击了 P2 元素!");
}, true);
document.getElementById("myDiv2").addEventListener("click", function () {
    alert("你点击了 DIV2 元素 !");
}, true);

//计时器
var myVar = setInterval(function () {
    myTimer()
}, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo7").innerHTML = t;
}

function myStopFunction()
{
    clearInterval(myVar);
}