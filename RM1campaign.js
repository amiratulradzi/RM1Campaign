document.getElementById("participationForm").addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault();
    } else {
       
        alert("Form submitted! Your generous donation has the power to brighten someone's day :)");
    }
});

function validateForm() {
    let isValid = true;

    // Validate Name
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Staff No.
    const staffNo = document.getElementById("staffNo");
    const staffNoError = document.getElementById("staffNoError");
    if (staffNo.value.trim() === "") {
        staffNoError.textContent = "Staff No. is required.";
        isValid = false;
    } else {
        staffNoError.textContent = "";
    }

    // Validate Department
    const department = document.getElementById("department");
    // Add validation for the department if needed

    // Validate Contact No.
    const contactNo = document.getElementById("contactNo");
    const contactNoError = document.getElementById("contactNoError");
    if (contactNo.value.trim() === "") {
        contactNoError.textContent = "Contact No. is required.";
        isValid = false;
    } else {
        contactNoError.textContent = "";
    }

    // Validate Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate Amount
    const amount = document.getElementById("amount");
    const amountError = document.getElementById("amountError");
    if (amount.value.trim() === "" || isNaN(amount.value)) {
        amountError.textContent = "Valid amount is required.";
        isValid = false;
    } else {
        amountError.textContent = "";
    }

    // Validate Start Date
    const startDate = document.getElementById("startDate");
    const startDateError = document.getElementById("startDateError");
    if (startDate.value.trim() === "") {
        startDateError.textContent = "Start Date is required.";
        isValid = false;
    } else {
        startDateError.textContent = "";
    }

    return isValid;
}