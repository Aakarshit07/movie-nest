export const checkValidData = (name, email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPsswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    // const isNameValid = /^[a-zA-Z]{4,}$/.test(name);
    if(!isEmailValid) return "Enter a valid email";
    if(!isPsswordValid) return "Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number and one special character";
    
    return null;
};