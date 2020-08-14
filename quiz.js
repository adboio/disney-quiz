// show the first question when the page loads
$(document).ready(function() {
  $('#question-1').show();
});

// list of all characters and their starting points
var characters = {
  "lilo": 0,
  "stitch": 0,
  "nina": 0,
  "david": 0,
  "jumba": 0,
  "pleakley": 0,
  "gantu": 0,
  "bubbles": 0,
  "pudge": 0
}

var characterList = ["lilo", "stitch", "nina", "david", "jumba", "pleakley", "gantu", "bubbles", "pudge"];

$('.answer-button').on('click', function(e) { // wait for an answer button to be clicked, then do something
  var parentId = $(this).parent().attr('id'); // get the id of the parent (i.e. 'answer-1')
  var questionNumber = parentId.split('-')[1]; // extract question number from id

  console.log(characters); // print list of characters and points
  var loc = $(this).attr('data-character').split(','); // get list of all characters who need a point
  for (let i = 0; i < loc.length; i++) { // loop over each character who needs a point
    characters[loc[i]] += 1; // add 1 point to each character who needs one
  }

  if (questionNumber < 5) { // for all questions prior to the last one
    $('#question-' + questionNumber).hide(); // hide this question
    $('#question-' + (parseInt(questionNumber) + 1)).show(); // show the next question
  } else { // for the last question
    $('#question-5').hide(); // hide the last question
    $('#final-row').show(); // show the final result

    var maxPoints = 0; // initialize maxPoints variable

    for (let i = 0; i < characterList.length; i++) { // loop over all characters
      var points = characters[characterList[i]]; // check point value for given character
      if (points > maxPoints) { // check if this character's points > max points
        maxPoints = points; // if so, set maxPoints to this value
      }
    }

    var winners = []; // initialize list of winners
    for (const c in characters) {
      if (characters[c] == maxPoints) {
        winners.push(c);
      }
    }

    if (winners.length == 1) {
      $('#finalCharacter').text(winners[0]);
      $('#winner-' + winners[0]).show();
    } else {
      var randomWinner = Math.floor(Math.random() * winners.length);
      $('#finalCharacter').text(winners[randomWinner]);
      $('#winner-' + winners[randomWinner]).show();
    }

  }


})
