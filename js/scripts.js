function glitch(n) {
  var result = [];
  for (i = 1; i <= n; i++) {
    if (i === 3) {
      result.push("I'm sorry dave, I'm affraid I can't do that");
    } else if (i === 2) {
      result.push("Boop");
    } else if (i === 1) {
      result.push("Beep");
    } else {
      result.push(i);
    }
  }
  return result;
}


$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var n = ($('input#intake').val());
    console.log(n);
    var result = glitch(n);
    console.log(result);
  })
})
