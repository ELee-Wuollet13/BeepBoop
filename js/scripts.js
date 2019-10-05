function glitch(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    if (i.includes(3)) {
      result.push("I'm sorry dave, I'm affraid I can't do that");
    } else if (i.includes(2)) {
      result.push("Boop");
    } else if (i.includes(1)) {
      result.push("Beep");
    } else {
      result.push(i);
    }
    return result;
  }
}


$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var n = parseInt($('input#intake').val());
    console.log(n);
    var result = glitch(n);
  })
})
