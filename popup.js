$(document).ready(function(){
    $("#input").keyup(function(){
        $("#text").text('Hello '+$("#input").val())
    })
})