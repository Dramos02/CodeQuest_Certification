// To update the pdf
function updateCertificate() {
    const certSelect = document.getElementById('certificateSelect').value;
    const certTitle = document.getElementById('certificateTitle');
    const certTypeText = document.getElementById('certificateType');
    
    if (certSelect === 'Beginner') {
        certTitle.textContent = 'Beginner/Fundamentals of Python Certificate';
        certTypeText.textContent = 'For demonstrating mastery of Python fundamentals.';
    } else {
        certTitle.textContent = 'Intermediate/Intermediate Python Certificate';
        certTypeText.textContent = 'For demonstrating advanced knowledge in Python programming.';
    }
}

// Current date base sa System
document.getElementById('completionDate').textContent = new Date().toLocaleDateString();

// Print PDF
function printCertificate() {
    window.print();
}

function shareOnLinkedIn() {
    // Certificate details
    const recipientName = document.getElementById("recipientName").innerText;
    const certificateTitle = document.getElementById("certificateTitle").innerText;
    const completionDate = document.getElementById("completionDate").innerText;

    // Custom message for sharing
    const shareText = `I am proud to share that I have earned the ${certificateTitle} presented by New Era University through Code Quest: The PyTome of Knowledge. Completed on ${completionDate}.`;

    // URL of the certification page or game (replace with your actual URL)
    const pageUrl = "https://dramos02.github.io/CodeQuest_Certification/index.html";

    // LinkedIn share URL
    const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(shareText)}`;

    // Open the LinkedIn share URL in a new tab
    window.open(linkedInShareUrl, "_blank");
}
