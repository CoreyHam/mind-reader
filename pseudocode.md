# Mind Reader Pseudocode
## Functionality
**Main Goal**: Have an app that a user could go to the next page and reset at any time. The pages show different content. The last two pages that show symbols need to change every time the mind reader is reset.

### Things to Keep in Mind

- The user will know the "magic" if the symbol is always the same. Make sure the symbols change **between uses**

## Objects
- Pages
  - Contains all the content, including instructions and buttons
- Buttons
  - NEXT
  - RESET
  - REVEAL
- Symbols
  - Should change every reset (maybe randomized)

## Define Objects and Functions

- Pages
  - text - Changes text shown at top of page
  - subText - Changes text at bottom of page

- Buttons
    - nextButton -> Takes user to next page from current page
    - resetButton -> Takes user back to page one
    - revealButton -> Takes user to the final page

- Symbols
  - sybols -> array of different symbols
## Page `States`

`State` 1: 
- text should say "I can read your mind"
- goButton should be displayed

`State` 2:
- text should say "Pick a number from 01 - 99"
- nextButton button should be displayed
- subText should say "when you have your number click next"
- resetButton should be displayed

`State` 3:
- text should say "Add both digits together to get a new number"
- nextButton should be displayed
- subText should say "Ex: 14 is 1 + 4 = 5\n click next to proceed"
- resetButton should be displayed

`State` 4:
- text should say "Subtract your new number from the original number"
- nextButton should be displayed
- subText should say "Ex: 14 - 5 = 9 click next to proceed"
- resetButton should be displayed

`State` 5:
- symbols shows list of numbers with a symbol assigned to each (zero should be the correct symbol)
- revealButton should be displayed
- subText should say "Find your new number and note the symbol beside the number"
- resetButton should be displayed

`State` 6:
- symbol shows the correct symbol
- subText should say "Your symbol is: " + symbol
