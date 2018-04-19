$(document).ready(function () {
    // $("p").click(function () {
    //     $(this).hide();
    // });

    // function myFunction() {
    //     $("#h01").attr("style", "color:red").html("Hello jQuery")
    // }

    // $("#btn1").click(function(){
    //     alert("Text: " + $("#test").text());
    // });
    // $("#btn2").click(function(){
    //     alert("HTML: " + $("#test").html());
    // });

    // $("button").click(function(){
    //     alert("值为: " + $("#test1").val());
    // });


    // $("#button1").click(function () {
    //     $("#runoob").attr({
    //         "href": "https://www.w3cschool.cn/jquery",
    //         "title": "jQuery 教程"
    //     });
    // });


    // $("#btn1").click(function () {
    //     $("p").append(" <b>追加文本</b>。");
    // });
    //
    // $("#btn2").click(function () {
    //     $("ol").append("<li>追加列表项</li>");
    // });


    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
        rules: {
            firstname: "required",
            lastname: "required",
            username: {
                required: true,
                minlength: 2
            },
            password: {
                required: true,
                minlength: 5
            },
            confirm_password: {
                required: true,
                minlength: 5,
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            "topic[]": {
                required: "#newsletter:checked",
                minlength: 2
            },
            agree: "required"
        },
        messages: {
            firstname: "请输入您的名字",
            lastname: "请输入您的姓氏",
            username: {
                required: "请输入用户名",
                minlength: "用户名必需由两个字母组成"
            },
            password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母"
            },
            confirm_password: {
                required: "请输入密码",
                minlength: "密码长度不能小于 5 个字母",
                equalTo: "两次密码输入不一致"
            },
            email: "请输入一个正确的邮箱",
            agree: "请接受我们的声明",
            topic: "请选择两个主题"
        }
    });

});
