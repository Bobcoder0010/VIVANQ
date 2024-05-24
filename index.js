document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const dashboardSection = document.getElementById('dashboard-section');
    const loginSection = document.getElementById('login-section');
    const logEntrySection = document.getElementById('log-entry-section');
    const logEntryForm = document.getElementById('log-entry-form');
    const addLogButton = document.getElementById('add-log-button');
    const cancelLogEntryButton = document.getElementById('cancel-log-entry');
    const logoutButton = document.getElementById('logout-button');
    const userNameDisplay = document.getElementById('user-name');
    const logEntries = document.getElementById('log-entries');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Placeholder for actual authentication logic
        if (username === 'admin' && password === 'admin') {
            userNameDisplay.textContent = username;
            loginSection.classList.add('hidden');
            dashboardSection.classList.remove('hidden');
        } else {
            alert('Invalid username or password');
        }
    });

    addLogButton.addEventListener('click', function() {
        dashboardSection.classList.add('hidden');
        logEntrySection.classList.remove('hidden');
    });

    cancelLogEntryButton.addEventListener('click', function() {
        logEntrySection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
    });

    logEntryForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const date = document.getElementById('date').value;
        const student = document.getElementById('student').value;
        const subject = document.getElementById('subject').value;
        const details = document.getElementById('details').value;

        const logEntry = document.createElement('div');
        logEntry.classList.add('log-entry');
        logEntry.innerHTML = `
            <h4>${date} - ${student}</h4>
            <p><strong>Subject:</strong> ${subject}</p>
            <p>${details}</p>
        `;
        logEntries.appendChild(logEntry);

        logEntrySection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');

        logEntryForm.reset();
    });

    logoutButton.addEventListener('click', function() {
        dashboardSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
    });
});
