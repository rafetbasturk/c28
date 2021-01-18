$(function() {

    // hamburger menu

    $("body").on("click", "#hamburger", function() {
        $(this).css("display", "none");
        $("#close").css("display", "block");
        $("#logo circle").css("fill", "white");
        $("#logo path:first").css("fill", "white");
        $("#logo path:last").css("fill", "#242A45");
        $("header").css({
            background: "hsla(229, 31%, 21%, .95)",
            height: "85px",
            marginBottom: "5.5rem"
        });

        $("nav").css({
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
        });
    });

    $("body").on("click", "#close", function() {
        $(this).css("display", "none");
        $("#hamburger").css("display", "block");
        $("#logo path:last").css({
            "fill": "white"
        });
        $("#logo path:first").css("fill", "#242A45");
        $("#logo circle").css("fill", "#5267DF");

        $("nav").css("display", "none");
        $("header").css({
            background: "none",
            height: "initial",
            marginBottom: "3.5rem"
        });
    });

    // tabs

    $("body").on("click", ".tab-menu", function(e){
        e.preventDefault();
        let href = $(e.target).attr("href");
        let chosenId = href.substring(1);

        // display clicked tab

        $(".tab-content").each(function(i, x) {
            if (x.id == chosenId) {
                if ($(window).width() >= 1200) {
                    $(this).css("display", "flex");
                } else {
                    $(this).css("display", "block");
                }
            } else {
                $(this).css("display", "none");
            }
        });

        //change color and display border-bottom
        $(e.target).css({
            "color": "hsl(229, 31%, 21%)",
            "border-bottom": "4px solid hsl(0, 94%, 66%)"
        });
        $(".tab-menu").not(e.target).css({
            "color": "hsl(229, 8%, 60%)",
            "border": "none"
        });
    });

    // accordion

    $("body").on("click", ".accordion" , function(e) {
        $(e.target).children("p").slideToggle();
        $(e.target).children().children("svg").toggleClass("rotate");
        $(e.target).children().children("svg").children("path").toggleClass("rotated-color");

        $(".accordion").not(e.target).children("p").css("display", "none");
        $(".accordion").not(e.target).children().children("svg").removeClass("rotate");
        $(".accordion").not(e.target).children().children("svg").children("path").removeClass("rotated-color");
    });

    // email verification

    $("body").on("click", "button", function(e){
        e.preventDefault();
        let email = $("#email").val();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email == "") {
            $("#error").css("display", "inline");
            $("#alert").css("display", "block").text("Please enter your email address");
            $("#email").parent().css("padding", ".2rem");
        } else if (re.test(String(email).toLowerCase()) == false) {
            $("#email").parent().css("padding", ".2rem");
            $("#error").css("display", "inline");
            $("#alert").css("display", "block");
        };
    });
});