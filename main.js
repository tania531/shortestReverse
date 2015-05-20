//find shortest length , reverse

var sentence = "Cattle Meow Elephant Dog Io Snake";

var results = shortestReversed(sentence);
console.log('results',results);

function shortestReversed(sent){
  var words = sent.split(" ");
  var shortest = words[0];
  words.forEach(function(w, i){
    if(w.length < shortest.length){
      shortest = w;
      shortest = shortest.split('').reverse().join('');
    }
  });
  return shortest;
}
