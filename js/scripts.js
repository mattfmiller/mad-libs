$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var inputs = ['occupation', 'femaleName', 'location', 'noun1', 'noun2', 'noun3', 'verbIng', 'pluralNoun', 'verbIng2', 'location2', 'verb']

    inputs.forEach(function(input) {
      var userInput = $('input#' + input).val();
      $('.' + input).text(userInput);
    });

    $("#story").show();
    event.preventDefault();
  });
});
