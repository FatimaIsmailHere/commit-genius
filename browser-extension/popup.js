const commitTypeSelect = document.getElementById('commit-type');
const commitDescriptionTextarea = document.getElementById('commit-description');
const issueNumberInput = document.getElementById('issue-number');
const breakingChangeCheckbox = document.getElementById('breaking-change');
const generateButton = document.getElementById('generate-button');
const commitPreviewPre = document.getElementById('commit-preview');
const copyButton = document.getElementById('copy-button');

generateButton.addEventListener('click', () => {
    const commitType = commitTypeSelect.value;
    const commitDescription = commitDescriptionTextarea.value;
    const issueNumber = issueNumberInput.value;
    const breakingChange = breakingChangeCheckbox.checked;

    let commitMessage = `${commitType}: ${commitDescription}`;

    if (issueNumber) {
        commitMessage += ` #${issueNumber}`;
    }

    if (breakingChange) {
        commitMessage += ` BREAKING CHANGE:`;
    }

    commitPreviewPre.textContent = commitMessage;

    // Send message to content script
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {commitMessage: commitMessage}, function(response) {
            console.log(response);
        });
    });
});

copyButton.addEventListener('click', () => {
    const commitMessage = commitPreviewPre.textContent;
    navigator.clipboard.writeText(commitMessage)
        .then(() => alert('Commit message copied to clipboard!'))
        .catch(err => console.error('Could not copy text: ', err));
});