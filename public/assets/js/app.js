$(document).ready(function(){
    $("#burger-form").on('click', function(e){
        e.preventdefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        console.log(newBurger);
        $.post("/api/burgers", newBurger, function(data){
            console.log("Added new burger");
            location.reload();
    })






})
})