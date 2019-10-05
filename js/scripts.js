$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var n = parseInt($('input#intake').val());
    console.log(n);
  })
})
