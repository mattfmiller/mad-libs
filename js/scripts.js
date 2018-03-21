$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var occupationInput = $("input#occupation").val();
    var femaleNameInput = $("input#female-name").val();
    var locationInput= $("input#location").val();
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var noun3Input = $("input#noun3").val();
    var verbIngInput = $("input#verb-ing").val();
    var pluralNounInput= $("input#plural-noun").val();
    var verbIng2Input = $("input#verb-ing2").val();
    var location2Input = $("input#location2").val();
    var verbInput = $("input#verb").val();
    $(".occupation").text(occupationInput);
    $(".female-name").text(femaleNameInput);
    $(".location").text(locationInput);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".noun3").text(noun3Input);
    $(".verb-ing").text(verbIngInput);
    $(".plural-noun").text(pluralNounInput);
    $(".verb-ing2").text(verbIng2Input);
    $(".location2").text(location2Input);
    $(".verb").text(verbInput);
    $("#story").show();
    event.preventDefault();
  });
});
