document.addEventListener('DOMContentLoaded', function () {
    const landingPage = document.getElementById('landing-page');
    const approvalPage = document.getElementById('approval-page');
    const approvalMessage = document.getElementById('approval-message');

    // Initially hide the approval page
    approvalPage.classList.add('hidden');

    // Simulating barcode scanning event
    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') { // Assuming Enter key is pressed after barcode scanning
            const scannedBarcode = prompt('Enter the barcode number:'); // Simulating scanned barcode

            // Simulating database lookup from your JSON
            const database = {
                "-NpFKQrBVhIvmPQoVIpK": {
                    "dob": "2008-07-26",
                    "email": "Sxbskk123@gmail.com",
                    "event": "TedXAlOruba",
                    "firstName": "Fahad",
                    "gender": "male",
                    "lastName": "Allinde",
                    "paymentCheck": true,
                    "specialNumber": 7071787
                },
                // Add more entries as needed
            };

            // Log the scanned barcode for debugging
            console.log('Scanned Barcode:', scannedBarcode);

            // Convert the scanned barcode to lowercase before looking it up in the database
            const lowerCaseScannedBarcode = scannedBarcode.toLowerCase();

            // Log the modified scanned barcode for debugging
            console.log('Modified Scanned Barcode:', lowerCaseScannedBarcode);

            // Check if the scanned barcode matches any special numbers in the database
            let user = null;

            for (const entry in database) {
                if (database[entry].specialNumber === Number(lowerCaseScannedBarcode)) {
                    user = database[entry];
                    break; // Exit the loop if a match is found
                }
            }

            // Log the user object for debugging
            console.log('User Object:', user);

            if (user) {
                approvalMessage.textContent = `Welcome, your ticket has been approved. Please go ahead and enjoy your time!`;

                // Show approval page
                landingPage.classList.add('hidden');
                approvalPage.classList.remove('hidden');

                // Automatically redirect to home page after 20 seconds
                setTimeout(function () {
                    landingPage.classList.remove('hidden');
                    approvalPage.classList.add('hidden');
                }, 20000);
            } else {
                alert('Ticket not found. Please try again.');
            }
        }
    });
});
