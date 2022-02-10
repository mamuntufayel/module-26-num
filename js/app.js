document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);

    if (userEmail == 'tufayel@juma.com' && userPassword == 'tufayeljuma') {
        // console.log('tik ase')
        window.location.href = 'link-submit.html';
    }
    else {
        console.log('vala kori mono koro');
    }
})