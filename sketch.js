let font1;
let font2;
let font3;
let s = 'Strings are text';
let userInput;
let button;
let poem = [];
let response;


function preload(){
    font1 = loadFont('CARAMELS PERSONAL USE DAFONT.otf')
    font2 = loadFont('OldeEnglish.ttf');
    font3 = loadFont('AquilineTwo.ttf');
}

function setup(){
createCanvas(400,580);
userInput = createInput();
userInput.position(60,100);
button = createButton('add to the law manuskript');
button.position(userInput.x + 148,userInput.y); 
button.mousePressed(newLine);
}

function draw(){
    background(232,223,192);
    textFont(font2);
    textSize(47);
    text('What are your demands?',12,84);
    textSize(37); 
    text('What may your empire desire?',20,40)
writePoem();

}

// function newLine() {
//     let userLine = userInput.value();
//     userInput.value(''); // Clear the input field
  
//     let words = RiTa.tokenize(userLine); // Tokenize the user input into words
//     let response = ''; // Initialize response
  
//     // Analyze each word and build a response
//     for (let x = 0; x < words.length; x++) {
//       if (RiTa.isNoun(words[x]) || RiTa.isVerb(words[x])) {
//         let analysis = RiTa.analyze(words[x]); // Analyze the word
//         response += analysis.syllables.join('-') + ' '; // Example: Use syllables from analysis
//       }
//     }
  
//     // Randomize the order of words using RiTa
//     let randomizedWords = RiTa.randomOrdering(words);
  
//     // Replace a random word with an alliteration
//     let r = floor(random(0, words.length)); // Pick a random index
//     let alliterations = RiTa.alliterations(words[r]); // Get alliterations for the word
//     if (alliterations.length > 0) {
//       words[r] = alliterations[floor(random(0, alliterations.length))]; // Replace with a random alliteration
//     }
  
//     // Combine the randomized words and the modified words into a new line
//     let newLine = RiTa.untokenize(randomizedWords) + '\n' + RiTa.untokenize(words);
  
//     // Add the new line to the poem
//     poem.push(newLine);
//   }

function newLine(){
    userLine = userInput.value();
    userInput.value('');
    let words = RiTa.tokenize(userLine);

    let randomAdjective = RiTa.randomWord({ pos: 'jj' }); // Get a random adjective
    words.splice(floor(random(0, words.length)), 0, randomAdjective); // Insert the adjective at a random position

    let randomizedWords = RiTa.randomOrdering(words);
   
    let nouns = words.filter(word => RiTa.isNoun(word)); // Find all nouns in the input
    if (nouns.length > 0) {
      let randomNoun = nouns[floor(random(0, nouns.length))]; // Pick a random noun
      let pluralNoun = RiTa.pluralize(randomNoun); // Pluralize the noun
      let index = randomizedWords.indexOf(randomNoun); // Find the index of the noun in the randomized words
      if (index !== -1) {
        randomizedWords[index] = pluralNoun; // Replace the noun with its plural form
      }
    }
  

    let randomizedLine = RiTa.untokenize(randomizedWords);
      poem.push(randomizedLine);

}

function writePoem(){
    for(x=0;x<poem.length;x++){
        textFont(font3);
        text(poem[x],40,165+x*34);
        // text.resize(12);
    }
}