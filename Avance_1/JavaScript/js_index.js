$( "#name_T" ).hide();
$( "#hr2" ).hide();
$( "#btn-gBD" ).click(function( event ) {
    event.preventDefault();
    $("#name_T").show();
    $("#hr2").show();
    $("#BD_Name").hide();
    $("#hr1").hide();
});

$( "#name_BD" )
  .keyup(function() {
    var value = $( this ).val();
    $( "#nombreBaseDatos" ).text( value );
  })
  .keyup();

function displayVals() {
  var singleValues = $( "#single" ).val();
  var multipleValues = $( "#multiple" ).val() || [];
  // When using jQuery 3:
  // var multipleValues = $( "#multiple" ).val();
  $( "p" ).html( "<b>Single:</b> " + singleValues +
    " <b>Multiple:</b> " + multipleValues.join( ", " ) );
}
 
$( "select" ).change( displayVals );
displayVals();

