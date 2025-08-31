// Function to inject the Commit Genius button
function injectButton() {
    const commitTextArea = document.getElementById('new_comment_field') || document.getElementById('comment_body'); // GitHub uses different IDs
    if (commitTextArea) {
        const button = document.createElement('button');
        button.textContent = '🪄 Commit Genius';
        button.classList.add('commit-genius-button'); // Add a class for styling if needed
        button.style.marginLeft = '10px'; // Add some spacing

        // Insert the button next to the textarea
        commitTextArea.parentNode.insertBefore(button, commitTextArea.nextSibling);

        // Add event listener to the button
        button.addEventListener('click', () => {
            // Open the popup
            chrome.runtime.sendMessage({openPopup: true});
        });
    }
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.commitMessage) {
            const commitTextArea = document.getElementById('new_comment_field') || document.getElementById('comment_body');
            if (commitTextArea) {
                commitTextArea.value = request.commitMessage;
            }
            sendResponse({status: "Commit message injected!"});
        }
    }
);

// Inject the button when the page loads
injectButton();

// Listen for page updates (e.g., when navigating between pages)
const observer = new MutationObserver(function(mutations) {
    injectButton();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});