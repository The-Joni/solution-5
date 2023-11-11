function calculateAge() {

    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '';

    dayInput.classList.remove('invalid-input');
    monthInput.classList.remove('invalid-input');
    yearInput.classList.remove('invalid-input');

    const day = parseInt(dayInput.value, 10);
    const month = parseInt(monthInput.value, 10);
    const year = parseInt(yearInput.value, 10);

    // Check if any input is empty
    if (!day || !month || !year) {
        errorMessage.textContent = 'Please fill in all date fields.';
        if (!day) dayInput.classList.add('invalid-input');
        if (!month) monthInput.classList.add('invalid-input');
        if (!year) yearInput.classList.add('invalid-input');
        return;
    }

    if (
        day < 1 || day > 31 ||
        month < 1 || month > 12 ||
        year < 1900 || year > 2023
    ) {
        errorMessage.textContent = 'Please enter a valid birthdate.';
        return;
    }
    const currentDate = new Date()

    const birthdate = new Date(year, month - 1, day)

    const ageInMilliseconds = currentDate - birthdate;
    const ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
    const ageInYears = Math.floor(ageInDays / 365);
    const ageInMonths = Math.floor((ageInDays % 365) / 30);
    const ageInRemainingDays = Math.floor(ageInDays % 30);

    const resultYears = document.getElementById('years');
    resultYears.textContent = ageInYears

    const resultMonths = document.getElementById('months')
    resultMonths.textContent = ageInMonths

    const resultDays = document.getElementById('days')
    resultDays.textContent = ageInRemainingDays
}
