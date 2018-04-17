function myFunction() {
    $("#h01").attr("style", "color:red").html("Hello jQuery")
}

$(document).ready(myFunction);

$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });
});