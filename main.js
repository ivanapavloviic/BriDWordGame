
var dictionary = [
    "POSAO"
];
var myWord;

function scramble(word) {
    return word.split('').sort(function(){ return Math.random() - 0.5 }).join('');
}

function chooseWord() {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function printWord(word) {
    var html = "";
    for (var i = 0; i < word.length; i++) {
        html += '<li class="tile">' + word[i] + '</li>'
    }
    $('.word').html(html);
}

function startGame() {
    myWord = chooseWord();
    
    var scrambled = scramble(myWord);
    
    while (scrambled == myWord) {
        scrambled = scramble(myWord);
    }
    
    printWord(scramble(myWord));
}

window.onload = function(){
  
    (function(){
      var counter = 5;
    
      setInterval(function() {
        counter--;
        if (counter >= 0) {
          span = document.getElementById("count");
          span.innerHTML = counter;
        }
       
        if (counter === 0) {
            var playAgain = confirm("Vreme je isteklo. Igraj ponovo?");
            if (playAgain) {
                startGame();
                counter=6;
            }   
            clearInterval(counter);
        }
        
      }, 1000);
        
    })();
      
    }




$(function(){    
    startGame();
    
    $('.word').sortable({
        update: function (e, ui) {


            
            console.log(myWord, $('.tile').text());
            if (myWord === $('.tile').text() ) {
                var playAgain = confirm("BRAVO! Igraj ponovo?");
                if (playAgain) {
                   
                    startGame();
                  this.counter=6;
                }  
                clearInterval(counter);                  
            }
        }
       
    });  
    

});