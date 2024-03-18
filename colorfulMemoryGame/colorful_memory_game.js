const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors);
let tempCards = cards.length;
let selectedCards = [];
let score = 0;
let timeLeft = 20;
let gameInterval;
let playing = false;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

startbtn.style.backgroundColor = "Green";
startbtn.style.color = "Black";

function generateCards() 
{
    for (const color of cards) 
    {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}

function shuffle(array) 
{
    for (let i = array.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function handleCardClick(event) 
{
    if(playing)
    {
        const card = event.target;
        if (!card.classList.contains('card') || card.classList.contains('matched') || card.classList.contains('flipped')) 
        {
            return;
        }
        card.classList.add('flipped');
        card.textContent = card.dataset.color;
        card.style.backgroundColor = card.dataset.color;
        selectedCards.push(card);
        if (selectedCards.length === 2) 
        {
            setTimeout(checkMatch, 250);
        }
    }
}

function checkMatch() 
{
    const [card1, card2] = selectedCards;
    if (card1.dataset.color === card2.dataset.color) 
    {
        card1.classList.add('matched');
        card2.classList.add('matched');
        score += 2;
        scoreElement.textContent = `Score: ${score}`;
        tempCards -=2 ;
        checkWin();
    } else 
    {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '?';
        card2.textContent = '?';
        card1.style.backgroundColor = '#ddd';
        card2.style.backgroundColor = '#ddd';
    }
    selectedCards = [];
}

function startGame() 
{
    playing = true;
    startbtn.innerText = "Stop";
    clearInterval(gameInterval);
    timeLeft = 20;
    score = 0;
    scoreElement.textContent = `Score: ${score}`;
    startGameTimer(timeLeft);
    cards = shuffle(colors);
    tempCards = cards.length
    selectedCards = [];
    gameContainer.innerHTML = '';
    generateCards();
    gameContainer.addEventListener('click', handleCardClick);
    startbtn.onclick = endGame;
    startbtn.style.backgroundColor = "Red";
}

function endGame() 
{ 
    playing = false;
    clearInterval(gameInterval);
    startbtn.innerText = "Start";
    startbtn.onclick = startGame;
    alert('Game Over!');
    startbtn.style.backgroundColor = "Green";
}

function startGameTimer(timeLeft) 
{
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if (timeLeft === 0) 
        {
            playing = false;
            clearInterval(gameInterval);
            startbtn.innerText = "Start"
            startbtn.onclick = startGame;
            alert('Game Over!');
            startbtn.style.backgroundColor = "Green";
        }
    }, 1000);
}

function checkWin()
{
    if(tempCards == 0)
    {
        playing = false;
        clearInterval(gameInterval);
        startbtn.innerText = "Start"
        startbtn.onclick = startGame;
        alert('You Won!');
        startbtn.style.backgroundColor = "Green";
    }
}

generateCards();
startbtn.onclick = startGame;