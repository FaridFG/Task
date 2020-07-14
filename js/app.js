$(function() {
    // function for showing the dropdown menu with slideDown() method
    $("#dropdown").click(function() {
        $(".left-menu > ul > li:last-child > ul").slideToggle(500);
    });

    // function for showing the modal window
    $(".btn-close").click(function() {
        $("div.modal").fadeIn("fast", function() {
            $("div.modal .content").fadeIn("slow");
            $("body").css({
                "height": "100vh",
                "overflow-y": "hidden"
            });
        });
    });
    $(".close-modal").click(function() {
        $("div.modal .content").fadeOut("slow", function() {
            $("div.modal").fadeOut("fast", function() {
                $("body").css({
                    "height": "auto",
                    "overflow-y": "scroll"
                });
            });
        });
    });
})