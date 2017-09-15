function validateEmail( email ) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test( email );
}

( function( $ ) {

	"use strict";

  var fadeInTime = 400; // how slow/fast you want the button to show
  var fadeOutTime = 400; // how slow/fast you want the button to hide


  $( "#subscribe-form-app" ).submit( function( e ) {
    e.preventDefault( );

    if( !validateEmail( $('#sub-email-app').val( ) ) ){
      $( "#sub-form-messages" ).text( 'invalid e-mail' );
      jQuery( "#sub-form-messages" ).fadeIn( fadeInTime );
      setTimeout( function( ) { jQuery( "#sub-form-messages" ).fadeOut( fadeOutTime ); }, 5000 );
      return;
    }
    var url = "../ico_email";

    $.ajax( {
      type: "POST",
      url: url,
      data: $( "#subscribe-form-app" ).serialize( ) +'&rType=sub',
      success: function( data ) {
        console.log( data );
        if( data["status"] == "ok" ) {
          $("#sub-form-messages").text( 'Your message was sent' );
        }
        else {
          $( "#sub-form-messages").text( data["message"] );
        }
        jQuery( "#sub-form-messages" ).fadeIn( fadeInTime );
        setTimeout( function( ) { jQuery("#sub-form-messages").fadeOut( fadeOutTime ); }, 5000 );
      }
    });
  });

  $( "#presale-form-app" ).submit( function( e ) {
    e.preventDefault( );

    if( !validateEmail( $('#pre-email-app').val( ) ) ){
      $( "#pre-form-messages" ).text( 'invalid e-mail' );
      jQuery( "#pre-form-messages" ).fadeIn( fadeInTime );
      setTimeout( function( ) { jQuery( "#pre-form-messages" ).fadeOut( fadeOutTime ); }, 5000 );
      return;
    }
    if( !$('#pre-tokens-app').val( ).trim( ) ){
      $( "#pre-form-messages" ).text( 'invalid number of tokens' );
      jQuery( "#pre-form-messages" ).fadeIn( fadeInTime );
      setTimeout( function( ) { jQuery( "#pre-form-messages" ).fadeOut( fadeOutTime ); }, 5000 );
      return;
    }

    var url = "../ico_email";

    $.ajax( {
      type: "POST",
      url: url,
      data: $( "#presale-form-app" ).serialize( ) +'&rType=pre',
      success: function( data ) {
        console.log( data );
        if( data["status"] == "ok" ) {
          $("#pre-form-messages").text( 'Your message was sent' );
        }
        else {
          $( "#pre-form-messages").text( data["message"] );
        }
        jQuery( "#pre-form-messages" ).fadeIn( fadeInTime );
        setTimeout( function( ) { jQuery("#pre-form-messages").fadeOut( fadeOutTime ); }, 5000 );
      }
    });
  });

})( jQuery );