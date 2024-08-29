document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    document.getElementById("confirmationMessage").textContent = "";

    
    const teamName = document.getElementById("teamName").value.trim();
    const name1 = document.getElementById("name1").value.trim();
    const phone1 = document.getElementById("phone1").value.trim();
    const name2 = document.getElementById("name2").value.trim();
    const phone2 = document.getElementById("phone2").value.trim();
    const name3 = document.getElementById("name3").value.trim();
    const phone3 = document.getElementById("phone3").value.trim();

   
    if (!teamName || !name1 || !phone1 || !name2 || !phone2 || !name3 || !phone3) {
        alert("All fields are required.");
        return;
    }
    if (!/^\d{10}$/.test(phone1) || !/^\d{10}$/.test(phone2) || !/^\d{10}$/.test(phone3)) {
        alert("Please enter valid 10-digit phone numbers.");
        return;
    }

    // If validation passes, display confirmation message
    document.getElementById("confirmationMessage").textContent = "Registration Successful!";
    document.getElementById("confirmationMessage").style.color = "#FFA07A"; // Bright orange color

    // Clear the form
    document.getElementById("registrationForm").reset();
});