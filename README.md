# Word-Guess-Game
## Site Screenshots
![Site Screenshot](assets/images/site_screenshot.png)

## Technologies Used
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [Google Chrome](https://www.google.com/chrome/)
- [Meyer Web Reset Page](https://meyerweb.com/eric/tools/css/reset/)

## Summary
The purpose of this homework assignment was to use javascript to create a letter guessing game. The player wins when the letter that they select matches what the computer selects. They have 10 tries to guess the right letter. 

## Steps

1. I structure my html to have tags that indicate number of wins, losses, guesses, and guesses made. I also have a tag that asks the user to pick a letter from the keyboard. 

2. Those html tags have nodes that link with variables in the javascript. So as the variables change in value, it is shown to the player on the browser (number of wins, losses, etc.)

3. Writing in my Javascript, create pointer variables to the nodes in html and variables that represent the values of those pointer variables (wins, losses, guesses left, guesses made). I then created an array called alphabet which is what the computer will select from by specifiying an index. I also instantiate a variable for whatever value the computer selects.

4. I create two functions. Function **reset()** resets the game once the player has either guessed the correct letter or has lost. Resetting the game involves setting the number of guesses back to 10, empties the letters guesssed array, and gets the computer to select a new index from the alphabet array. The second function **checkAlpha()** checks the key pressed by the player. If the player presses a letter within the alphabet, it returns the value true.

5. I set the computer selection variable to the indice in an alphabet that is randomly selected using Math.floor and Math.random().

6. 

## My Links
- [Github](https://github.com/dchicchon)
- [LinkedIn](https://www.linkedin.com/in/danielchicchon/)
