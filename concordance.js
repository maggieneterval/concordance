function concordance (str) {

  //Check that input is a string.
  if (!str || typeof str !== 'string') throw new Error('Must pass concordance a string');

  //Check for sentence boundaries, as indicated by the presence of a period, question mark, or exclamation point,
  //followed by one or more whitespace characters, followed by a capital letter.
  //Replace the punctuation mark with a pipe on which to split to create an array of sentences. Additionally, remove commas, semicolons, colons, and parentheses.
  const sentences = str.replace(/([.?!])\s+(?=[A-Z])/g, '|').replace(/[:;,\(\)]/g, '').split('|');

  //Remove the final punctuation mark from the last sentence.
  sentences[sentences.length - 1] = sentences[sentences.length - 1].slice(0, sentences[sentences.length - 1].length -1);

  //Initialize object to hold word frequencies.
  const dictionary = {};

  //Initialize variable to hold array of words for each sentence.
  let words;

  sentences.forEach((sentence, sentInd) => {
    //Split each sentence on space to create array of words. Convert each word to lowercase for consistency.
    words = sentence.split(' ').map(word => word.toLowerCase());
    words.forEach((word) => {
      //If the word is not a key in the dictionary, initialize an object at that key. with a count variable and an array of sentences that include that word (biased by 1 for a 1-indexed count).
      //Otherwise, increment the count and push the current sentence into the list.
      if (!dictionary[word]){
        dictionary[word] = {count: 1, sentences: [sentInd + 1]};
      } else {
        dictionary[word].count++;
        dictionary[word].sentences.push(sentInd + 1);
      }
    });
  });

  //Create an array of the alphabetized words.
  const alphabetizedWords = Object.keys(dictionary).sort();

  //Format output as indicated, with alphabetical labelling.
  //Keep track of current number of label letters (i.e. 1 for 'a', 2 for 'aa', etc.), and current index in the alphabet.
  let numLetters = 1;
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  let ind = 0;
  let label;

  const output = alphabetizedWords.map(word => {
    label = letters[ind].repeat(numLetters);
    //Wrap back to index 0 when alphabet has been exhausted, incrementing numLetters by 1.
    numLetters = ind === letters.length - 1 ? numLetters + 1 : numLetters;
    ind = ind === letters.length - 1 ? 0 : ind + 1;
    return `${label}. ${word} {${dictionary[word].count}:${dictionary[word].sentences.join(',')}}`;
  });

  //Print list of words, separated by newlines, and return the output array.
  console.log(output.join('\n'));
  return output;
}

concordance(process.argv[2]);
