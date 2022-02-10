$( document ).ready(function() {
    let num = 0;

    $(".add-todo").click( function(){
        num++;
        $(".todo-list").append(`<span>${num}. ${$("input").val()}</span><br>`);
        $("input").val("");
    });

    $(".clear").click( function(){
        num = 0;
        $(".todo-list").empty();
    });
});