$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });

    function myFunction() {
        $("#h01").attr("style", "color:red").html("Hello jQuery")
    }

    // $("#btn1").click(function(){
    //     alert("Text: " + $("#test").text());
    // });
    // $("#btn2").click(function(){
    //     alert("HTML: " + $("#test").html());
    // });

    // $("button").click(function(){
    //     alert("值为: " + $("#test1").val());
    // });


    $("#button1").click(function () {
        $("#runoob").attr({
            "href": "https://www.w3cschool.cn/jquery",
            "title": "jQuery 教程"
        });
    });


    $("#btn1").click(function () {
        $("p").append(" <b>追加文本</b>。");
    });

    $("#btn2").click(function () {
        $("ol").append("<li>追加列表项</li>");
    });

});
