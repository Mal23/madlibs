function story() {

// inputs by id
var nounOneInput = document.getElementById('noun-one');
var adjectiveInput = document.getElementById('adjective');
var verbInput = document.getElementById('verb');
var bodyPartInput = document.getElementById('body-part');
var nounTwoInput = document.getElementById('noun-two');
var adverbInput = document.getElementById('adverb');

// get values out of inputs
var nounOne = nounOneInput.value;
var adjective = adjectiveInput.value;
var verb = verbInput.value;
var bodyPart = bodyPartInput.value;
var nounTwo = nounTwoInput.value;
var adverb = adverbInput.value;

// make the story
var story = 'Please add one' + ' ' + nounOne + ' ' + 'to your' +  ' ' + adjective + " " + 'stew. ' + 'Stir' + ' ' + verb + ' ' + 'with your' + ' ' + bodyPart  + '. ' + ' ' + 'Season with' + ' ' + nounTwo + '. ' + ' '  + 'Then enjoy' + ' ' + adverb + '! ' + ' ' + 'Ah-ah-ah';
console.log(story);

// display the story
var madLib = document.getElementById('madLib');
console.log(madLib);
madLib.textContent = story;
}