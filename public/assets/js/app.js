$(document).ready(function(){
    $("#burger-form").on('click', function(e){
        e.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        console.log(newBurger);
        $.post("/api/burgers", newBurger, function(data){
            console.log("Added burger");
            location.reload();
    })
})
})