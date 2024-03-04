let count = 0; // Initialize count to 0
let reachedTen = 0;

  function increaseCount() {
    count++; // Increment the count by 
    reachedTen++; //increments the reaching 10 followers checker
    displayCount(); //Display the count
    checkCountValue(); // Check count value and display messag
  }

  function displayCount() {
    document.getElementById('countDisplay').innerText = count;
  }

  function checkCountValue() {
    if (reachedTen == 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
      reachedTen = 0;
    }
  }

