# Mind Reader Pseudocode
## Functionality
**Main Goal**: Have an app that a user could go to the next page and reset at any time. The pages show different content. The last two pages that show symbols need to change every time the mind reader is reset.

### Things to Keep in Mind

- The user will know the "magic" if the symbol is always the same. Make sure the symbols change **between uses**

## Objects
- Pages
  - Contains all the content, including instructions and buttons
- Buttons
  - GO
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
    - goButton -> Takes user from page one to page two
    - nextButton -> Takes user to next page from current page
    - resetButton -> Takes user back to page one
    - revealButton -> Takes user to the final page

- Symbols
  - sybols -> array of different symbols
## Page States

### First State
- Text should say "I can read your mind"
- goButton should be shown

### Second State
- Test should say "Pick a number from 01 - 99"
- nextButton should display
- subText should say "when you have your number click next"
- resetButton should display

### Third State
- Test should say "Add both digits together to get a new number"
- nextButton should display
- subText should say "Ex: 14 is 1 + 4 = 5 click next to proceed"
- resetButton should display

### Fourth State
- Test should say "Subtract your new number from the original number"
- nextButton should display
- subText should say "Ex: 14 - 5 = 9 click next to proceed"
- resetButton should display

### Fifth State
- Text should display a list on numbers with different symbols (with 0 being the correct symbol)
- revealButton should display
- subText should say "Find your new number and Note the symbol beside the number"
- resetButton should display
