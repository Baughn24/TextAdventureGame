// Text Adventure Game
const enter = "Please enter 1 or 2 for your answer";
const gameOver = "Sorry GAME OVER!";
const start = `Welcome to the Ghostbusters Text Adventure Game. Click 'OK' to start the game.`;
const q1 = `You are trying to catch a ghost called "Slimer" at the Sedgwick Hotel but have not seen him yet. Should you...
1. Take the elevator to look on the 12th floor
OR
2. Wait in the lobby to see if he shows up there
${enter}`;
const gameOver1 = `You never see Slimer so you give up on catching ghosts and become a talk show host instead. ${gameOver}`;
const q2 = `When you get off the elevator something startles you! Should you...
1. Look to see what it is
OR
2. Shoot at it immediately with your proton pack
${enter}`;
const gameOver2 = `It was the hotel maid and you nearly killed her! You are forced to leave the hotel. ${gameOver}`;
const q3 = `It was just the hotel maid. So you walk around to look for Slimer and You Spot Him! Should you...
1. Call to let the other Ghostbusters know you found him
OR
2. Hide and wait to see where he goes
${enter}`;
const gameOver3 = `Slimer hears you, immediately flies at you, and YOU GET SLIMED! ${gameOver}`;
const q4 = `You see that Slimer goes into the ballroom so you quickly tell the other Ghostbusters and you all head in. You see him flying around when you walk in. Should you...
1. Shoot at him with your proton pack
OR
2. Put two proton packs together to try and create a more powerful shot (A.K.A. Cross The Streams)
${enter}`;
const gameOver4 = `All life as you know it stops instantaneously and every molecule in your body explodes at the speed of light. ${gameOver}`;
const q5 = `You wrangled Slimer with your shot and the ghost trap is set underneath him. You noticed there is a bright light coming from the trap and are tempted to look at it. Should you...
1. Look at the trap
OR
2. Keep your focus on Slimer
${enter}`;
const gameOver5 = `You looked at the trap and the light BLINDED YOU! ${gameOver}`;
const win = `The ghost trap sucked Slimer in and closed. CONGRATULATIONS! YOU CAUGHT SLIMER!!!`;

// Alerts the user to start the game
alert(start);

// Sets the value of userInput to the user's entry
let userInput = prompt(q1);

// 1st Conditional Statement
// NOTE: Prompt returns the value entered as a string. That is why double equals is used instead of triple equals here.
if (userInput == 1) {
   userInput = prompt(q2);
//    2nd Conditional Statement-we keep nesting the IF statements becasue if they keep answering the questions right, it prompts them to go to the next question (AKA the next IF statement). The IF's are connected to the ELSE statements, so if they choose the wrong answer (IF) it will go to the ELSE statement that gives them the gameOver alert based on what they input
    if (userInput == 1){
        userInput = prompt(q3);
        // 3rd Conditional Statement
        if (userInput == 2){
            userInput = prompt(q4);
            // 4th Conditional Statement
            if (userInput == 1){
                userInput = prompt(q5);
                // 5th Conditional Statement-last one so you have to put an alert not a prompt
                if (userInput == 2){
                    alert(win);
                    // Connected to 5th Conditional Statement
                } else {
                    alert(gameOver5);
                }
            // This is connected to 4th conditional statement
            } else {
                alert(gameOver4)
            }
        // This is connected to 3rd conditional statement
         } else {
             alert(gameOver3);
         }
        // This else is connected to 2nd conditional statement
    } else {
        alert(gameOver2);
    }
// This else is connected to 1st conditional statement
} else {
    alert(gameOver1);
}