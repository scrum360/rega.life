/**
 * ===================================================================
 * mail js
 *
 * -------------------------------------------------------------------
 */

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

 (function($) {

	"use strict";

  var fadeInTime = 400; // how slow/fast you want the button to show
  var fadeOutTime = 400; // how slow/fast you want the button to hide


   $("#fmc-form-app").submit( function(e) {
       e.preventDefault( );

       if( !validateEmail( $("#fmc-email-app").val() ) ){
          $("#form-messages").text('invalid e-mail');
          jQuery("#form-messages").fadeIn(fadeInTime);
          setTimeout( function() { jQuery("#form-messages").fadeOut(fadeOutTime); }, 2000);
          return;
       }
       var url = "../ico_email";

       $.ajax({
              type: "POST",
              url: url,
              data: $("#fmc-form-app").serialize(),
              success: function( data )
              {
                if( data["status"] == "ok" ) {
                   $("#form-messages").text('Your message was sent');
                }
                else {
                   $("#form-messages").text('error');
                }
                jQuery("#form-messages").fadeIn(fadeInTime);
                setTimeout( function() { jQuery("#form-messages").fadeOut(fadeOutTime); }, 2000);
              }
            });

   });

})(jQuery);