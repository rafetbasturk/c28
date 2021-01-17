$(function() {
    $("body").on("click", "#hamburger", function() {
        $(this).css("display", "none");
        $("#close").css("display", "block");
        $("#logo circle").css("fill", "white");
        $("#logo path:first").css("fill", "white");
        $("#logo path:last").css("fill", "#242A45");
        $("body").css({
            background: "hsla(229, 31%, 21%, .9)"
        });
        $("nav").fadeIn(300, function(){
            $(this).fadeIn().css({
                display: "flex",
            });
        });


    });

    $("body").on("click", "#close", function() {
        $(this).css("display", "none");
        $("#hamburger").css("display", "block");
        $("#logo circle").css("fill", "#5267DF");
        $("#logo path:first").css("fill", "#242A45");
        $("#logo path:last").css({
            "fill": "white"
        });
        $("body").css({
            background: "none"
        });
        $("nav").fadeOut(300, function(){
            $(this).fadeOut();
        });
    });

    // tabs

    $("body").on("click", ".tab-menu", function(e){
        let href = $(e.target).attr("href");
        let chosenId = href.substring(1);

        $(".tab-content").each(function(i, x) {
            if (x.id ==chosenId) {
                $(this).css("display", "block");
            } else {
                $(this).css("display", "none");
            }
        });
        
        $(e.target).css({
            "color": "hsl(229, 31%, 21%)",
            "padding-bottom": "1.4rem",
            "border-bottom": "4px solid hsl(0, 94%, 66%)"
        });
        $(".tab-menu").not(e.target).css({
            "color": "hsl(229, 8%, 60%)",
            "padding-bottom": "1.8rem",
            "border-bottom": "none"
        });
    });

    // accordion

    $("body").on("click", ".accordion" , function(e) {
        $(e.target).children("p").css("display", "block");
        $(e.target).children().children("svg").css("transform", "rotate(180deg)");
        $(e.target).children().children("svg").children("path").css("stroke", "hsl(0, 94%, 66%)");
        $(".accordion").not(e.target).children("p").css("display", "none");
        $(".accordion").not(e.target).children().children("svg").css("transform", "rotate(0)");
        $(".accordion").not(e.target).children().children("svg").children("path").css("stroke", "#5267DF");
    });
});