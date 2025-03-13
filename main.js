const forgotEmailInput = document.querySelector("#forgot-email");
const newPasswordInput = document.querySelector("#new-password");
const resetPasswordBt = document.querySelector("#reset-password-bt");

if (resetPasswordBt != null) {
    resetPasswordBt.addEventListener("click", function () {
        const email = forgotEmailInput.value;
        const newPassword = newPasswordInput.value;

        if (email.length === 0 || newPassword.length === 0) {
            showNotif("Please enter all fields", "warn");
            return;
        }

        // Find user in localStorage
        let foundUser = null;
        Object.keys(localAccounts).forEach((username) => {
            if (localAccounts[username].Email === email) {
                foundUser = username;
            }
        });

        if (foundUser === null) {
            showNotif("Email not found!", "error");
        } else {
            // Update password in localStorage
            localAccounts[foundUser].Password = newPassword;
            localStorage.setItem("Accounts", JSON.stringify(localAccounts));
            showNotif("Password reset successfully!", "done");

            // Redirect to login after 2 seconds
            setTimeout(() => {
                window.open("index.html", "_self");
            }, 2000);
        }
    });
}
