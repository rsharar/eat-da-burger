$(document).ready(function(){
    $("#burger-form").on('click', function(e){
        e.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
            console.log("Added burger");
            location.reload();
    })
})
})