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
