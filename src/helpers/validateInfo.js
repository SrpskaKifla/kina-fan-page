function checkIfEmail(str) {
    const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

    return regexExp.test(str);
}

export default function validateInfo(inputValue) {
    let errors = {}

    const { name, email, password, confirmPassword }  = inputValue;

    if (!name.trim()) {
        errors.username = "Username required";
    } else if (name.length < 3 || name.length > 16) {
        errors.username = "Name must be between 3 and 16 characters";
    }

    if (!email) {
        errors.email = "Email required";
    } else if (!checkIfEmail(email)) {
        errors.email = "Email is not valid";
    }

    const number = /[0-9]/;
    const lower = /[a-z]/;
    const upper = /[A-Z]/;

    if (!password) {
        errors.password = "Password is required";
    } else if (password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
    } else if (!number.test(password) || !lower.test(password) || !upper.test(password)) {
        errors.password = "Password must be a/z, A/Z, 1-9";
    }

    if (!confirmPassword) {
        errors.confirmPassword = "Confirm password required";
    } else if (confirmPassword !== password) {
        errors.confirmPassword = "Passwords do not match";
    }

    return errors;
}