$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var occupationInput = $("input#occupation").val();
    var female-nameInput = $("input#female-name").val();
    var locationInput= $("input#location").val();
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var noun3Input = $("input#noun3").val();
    var verb-ingInput = $("input#verb-ing").val();
    var plural-nounInput= $("input#plural-noun").val();
    var verb-ing2Input = $("input#verb-ing2").val();
    var location2Input = $("input#location2").val();
    var verbInput = $("input#verb").val();
    $(".occupation").append(occupationInput);
    $(".female-name").append(female-nameInput);
    $(".location").append(locationInput);
    $(".noun1").append(noun1Input);
    $(".noun2").append(noun2Input);
    $(".noun3").append(noun3Input);
    $(".verb-ing").append(verb-ingInput);
    $(".plural-noun").append(plural-nounInput);
    $(".verb-ing2").append(verb-ing2Input);
    $(".location2").append(location2Input);
    $(".verb").append(verbInput);
    $("#story").show();
    event.preventDefault();
  });
});
