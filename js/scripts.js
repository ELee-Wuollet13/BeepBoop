function glitch(n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    if (i.toString().includes("3")) {
      result.push("I'm sorry dave, I'm affraid I can't do that");
    } else if (i.toString().includes("2")) {
      result.push("Boop");
    } else if (i.toString().includes("1")) {
      result.push("Beep");
    } else {
      result.push(i);
    }
  }
  console.log(i);
  console.log(result);
  return result;
}

$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var n = parseInt($('input#intake').val());
    console.log(n);
    var result = glitch(n);
    console.log(result);
  })
})
