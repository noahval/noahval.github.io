document.addEventListener('DOMContentLoaded', function () {
    // Check if the thumbs count is stored in local storage
    let thumbsCount = localStorage.getItem('thumbsCount');

    // If not, initialize it to 0
    if (!thumbsCount) {
        thumbsCount = 0;
        localStorage.setItem('thumbsCount', thumbsCount);
    }

    // Display the initial thumbs count
    updateThumbsCounter(thumbsCount);
});

function incrementCounter() {
    let thumbsCount = localStorage.getItem('thumbsCount') || 0;

    // Increment the thumbs count on each click
    thumbsCount++;
    
    // Update local storage and display the updated count
    localStorage.setItem('thumbsCount', thumbsCount);
    updateThumbsCounter(thumbsCount);
}

function updateThumbsCounter(count) {
    const thumbsCounterElement = document.getElementById('thumbsCounter');
    thumbsCounterElement.textContent = count;
}