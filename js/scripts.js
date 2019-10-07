// Business logic

function glitch(array, n) {
  var result = [];
  for (var i = 1; i <= n; i++) {
    if (array[i].includes("3")) {
      result.push("I'm sorry dave, I'm affraid I can't do that");
    } else if (array[i].includes("2")) {
      result.push("Boop");
    } else if (array[i].includes("1")) {
      result.push("Beep");
    } else {
      result.push(i);
    }
  }
  console.log(i);
  return result;
  console.log(result);
}

// User Interface logic


$(document).ready(function() {
  $("#input form").submit(function(event) {
    event.preventDefault();
    var n = parseInt($('input#intake').val());
    var array = [];

    for (i = 0; i <= n; i++) {
      array.push(i.toString());
    }

    console.log(n);
    var results = glitch(array, n);
    console.log(results);
    results.forEach(function(element) {
  $('#solution').append("<li>" + element + "</li>");
  })
})
})
