# Guess Who: Animals

[Guess Who: Animals Wireframe](https://i.imgur.com/9p6r9Ac.png)

### Intended Audience is for ages 3 and up

*Object of the Game*
<p class="object">The object of the game is to "ask" the computer yes or no questions to figure out the secret animal using the process of elimination.
</p>
*Setup*
<p>The screen will show all 12 animal images in a grid on the main screen. The animal attributes to choose from will display on the right in a sidebar. As the screen loads, audio will say, "Can you guess my animal?"
</p>
*Play*
<p>The way to play the game is by selecting an attribute from the options given on the right. The player will click an attribute and the computer will answer either, "Yes, I have ()!" or "No, I don't have ()!"
</p>
<p>Once the computer has answered, the player will select animal images that they don't want to keep in order to narrow down their selections as to the secret animal. Those selections will be "turned over" after the player clicks on them. At this point, the player will select an additional attribute, until they are left with only one image. If that image is the same as the computer's secret image, the player wins and they'll hear, "Hooray! You won!" If the player is incorrect, the player will hear, "Sorry, you didn't guess my secret animal." The secret image will then appear on the screen.
</p>
*Pseudocode*
<p>// if the animal.id = solution then say YES YOU ARE RIGHT! ELSE SAY WRONG! 




// make descriptions for each animal for the computer to be able to compare with the clue that is selected by 
// the player

// set up random computer animal selection

// create hover events for clue selections with audio that describes the Image

// create click events for the clues that are selected 

// computer will respond with a yes/no answer if the secret animal has the selected clues

// create click events to "hide" the animal images that are selected

// once one animal image is remaining, computer will compare with secret animal. 

// If same, computer will congratulate winner. If not, computer will "show" correct image and tell player to play again.
</p>