
var getQuote = function() {
  $.ajax({
    url: 'http://api.icndb.com/jokes/random?firstName=Daniel&amp&lastName=Tam',
    //type: 'GET',
    //contentType: 'application/json',
    //dataType: 'json',
    success: function(data) {
      $('#changeMe').html(data.value.joke);
    }
  });
}

$(document).ready(function() {
  // get a random quote when page loads
  getQuote();
  $('#quoteBut').on('click', function(){
    getQuote();
  });
});