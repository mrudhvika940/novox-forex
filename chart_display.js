 $(window).scroll(function ()

    {     
        if ( $(window).scrollTop() > 200)
        {
            $("#menu").addClass("fixnav");
        }
        else  if ($(window).scrollTop() < 200)
        {
            $("#menu").removeClass("fixnav");
        }
    });
