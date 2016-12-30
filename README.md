# Bridgewater Associates Coding Challenge - Maggie Neterval

## To run:

- Make sure you have Node.js installed.
- Run the following command from this project directory, including the string to parse (in quotes) as an argument as indicated:

```
node concordance.js <YOUR STRING HERE>
```

## Additional information:

- I spent approximately two hours on this challenge.
- I referenced this Stack Overflow [article](http://stackoverflow.com/questions/18914629/split-string-into-sentences-in-javascript) when considering how best to divide a string into sentences.
- A known deficiency in this program is splitting the text into sentences: it currently identifies the pattern sentence-ending-punctuation + whitespace + capital letter as a sentence boundary, but 'e.g.' or 'i.e.' followed by a proper noun would mistakenly be identified as a sentence boundary.
- Please see inline comments in concordance.js for more detailed documentation.