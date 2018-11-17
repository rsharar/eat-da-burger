$(document).ready(function () {
    $(".btn-danger").on('click', function (e) {
        e.preventDefault();
        var newBurger = {
            burger_name: $("#burger-input").val().trim()
        };
        console.log(newBurger);
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added burger");
                location.reload();
            })
    })
    $(".devour-btn").on('click', function (e) {
        e.preventDefault();
        var burgerId = $(this).data("id");
        var devour = $(this).data("devour");
        if (devour) {
            var newDevouredState = {
                devoured: devour
            };
            $.ajax("/api/burgers/" + burgerId, {
                type: "PUT",
                data: newDevouredState
            }).then(function () {
                console.log("devoured state changed");
                location.reload();
            })
        }
        else {
            $.ajax("/api/burgers/" + burgerId, {
                type: "DELETE"
            }).then(function () {
                console.log("Burger gone")
                location.reload();
            })
        }
    })
})

