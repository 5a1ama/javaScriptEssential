let testTexts = ["Please take your dog, Cali, out for a walk, he really needs some exercise!",
"What a beautiful day it is on the beach, here in beautiful and sunny Hawaii.",
"Rex Quinfrey, a renowned scientist, created plans for an invisibility machine.",
"Do you know why all those chemicals are so hazardous to the environment?",
"You never did tell me how many copper pennies where in that jar; how come?",
"Max Joykner sneakily drove his car around every corner looking for his dog.",
"The two boys collected twigs outside, for over an hour, in the freezing cold!",
"When do you think they will get back from their adventure in Cairo, Egypt?",
"Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.",
"We climbed to the top of the mountain in just under two hours; isn’t that great?",
"Hector quizzed Mr. Vexife for two hours, but he was unable to get any information.",
"I have three things to do today: wash my car, call my mother, and feed my dog.",
"Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside.",
"The Reckson family decided to go to an amusement park on Wednesday.",
"That herd of bison seems to be moving quickly; does that seem normal to you?",
"All the grandfather clocks in that store were set at exactly 3 o’clock.",
"There are so many places to go in Europe for a vacation--Paris, Rome, Prague, etc.",
"Those diamonds and rubies will make a beautiful piece of jewelry.",
"The steamboats seemed to float down the Mississippi River at a snail’s pace.",
"In order to keep up at that pace, Zack Squeve would have to work all night."];

let startTime, endTime;
let wrong = false;

// Starting Conditions
var button = document.getElementById("btn");
button.innerHTML = "Start Test";
button.onclick = startTest;
document.getElementById("userInput").readOnly = true;

function startTest() {

    // Enable user input
    document.getElementById("userInput").readOnly = false;
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").focus();

    // Set the test text
    const randomIndex = Math.floor(Math.random() * testTexts.length);
    document.getElementById("inputText").value = testTexts[randomIndex];
    
    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    
    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var testText = document.getElementById("inputText").value 
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var textWords = testText.split(/\s+/);
    var typedWords = userTypedText.split(/\s+/);
    
    if(textWords.length != typedWords.length){
        wrong = true;
    }

    else{ 
        for(let i=0 ; i<textWords.length ; i++)
        {
            if(textWords[i] != typedWords[i])
            {
                wrong = true;
            }
        }
    }

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && wrong == false) {
        wpm = Math.round((typedWords.length / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    if(wrong == false)
    {
        outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords.length + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
    }
    else
    {
        outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>The words does not match, please try again..</p>";
        wrong = false;
    }

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
            endTest();
    }
  });