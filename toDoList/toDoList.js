$("ul").on("click","li",function () {
    $(this).toggleClass("check");
});

$("ul").on("click","span",function (event) {
    $(this).parent().fadeOut(500,function(){
        $(this).remove(); // here the this is refering to the li
    });
    event.stopPropagation(); //Stops the event from bubbling up 
}) 

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var toDo = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i id='trash' class='fa fa-trash' aria-hidden='true'></i></span>"+ toDo + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})