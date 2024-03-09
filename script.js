// save input data in url at button click
function saveData() {
    var userInput = document.getElementById('userData').value;
    window.location.href = 'answer.html?data=' + encodeURIComponent(userInput);
}

// Display the number of days on the answer page with specific text for each number input
function displayDataFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    var inputData = urlParams.get('data');

    // Display the number of days on the answer page with specific text for each number input
    var displayDiv = document.getElementById('displayData');

    if (inputData === null || isNaN(inputData)) {
        // Handle invalid input (non-numeric or null)
        displayDiv.textContent = 'Invalid input. Please enter a valid number of days.';
    } else {
        // Convert input to a number
        var numberOfDays = parseInt(inputData, 10);

        // Display specific text based on the number of days
        if (numberOfDays <= 2) {
            displayDiv.textContent = '1 or 2 days. You are suuuuuper maniak';
        } else if (numberOfDays <= 5) {
            displayDiv.textContent = 'Few days. You are basic';
        } else {
            displayDiv.textContent = + numberOfDays + ' days. Miss or Mister Messy here!';
        }
    }
}

// Call the function to display data from the URL when the document is fully loaded
        document.addEventListener('DOMContentLoaded', displayDataFromUrl);