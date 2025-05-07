// Function to save preferences in localStorage
function savePreference(preferenceKey, value) {
    localStorage.setItem(preferenceKey, value);
}

// Function to retrieve preferences from localStorage
function getPreference(preferenceKey) {
    return localStorage.getItem(preferenceKey);
}

// Apply stored preferences (if any)
function applyStoredPreferences() {
    const bgColor = getPreference('bgColor');
    if (bgColor) {
        document.body.style.backgroundColor = bgColor;
    }
}

// Event listener for button click to trigger animation and store preference
document.getElementById('animButton').addEventListener('click', function () {
    this.classList.toggle('clicked');
    
    // Save background color preference on click
    const newBgColor = (document.body.style.backgroundColor === 'rgb(255, 193, 7)') ? '#f0f0f0' : '#FFC107';
    savePreference('bgColor', newBgColor);

    // Apply new background color dynamically
    document.body.style.backgroundColor = newBgColor;
});

// Apply stored preferences when the page loads
applyStoredPreferences();
