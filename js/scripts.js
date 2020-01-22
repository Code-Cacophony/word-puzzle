$(document).ready(function() {

  $("form").submit(function(event){
    event.preventDefault();

    var word = $("#enter").val();
    var wordSplit = word.split("");
    for (var i=0; i < wordSplit.length; i++) {
      if ((wordSplit[i] === "a") || (wordSplit[i] === "e") || (wordSplit[i] === "i") || (wordSplit[i] === "o") || (wordSplit[i] === "u")) {
        wordSplit[i] = "-";
      }
    }
    var finalWord = wordSplit.join("");
    $("#wordDisp").text(finalWord);
    $("input").toggle();
  })
})
