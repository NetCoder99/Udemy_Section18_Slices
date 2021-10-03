interface errRecord {fieldName: string, errMessage: string};

export function validateEmail(email: string): errRecord | null {
    if (!email) {
        return { fieldName: "email", errMessage: "Email is required"}
    }
    if (!email.indexOf('@')) {
        return { fieldName: "email", errMessage: "Email format is invalid"}
    }
    return null;
}

export function validatePassword(password: string): errRecord | null {
    if (!password) {
        return { fieldName: "password", errMessage: "Password is required"}
    }
    return null;
}

export function validateForm(email: string, password: string): errRecord[] | null {
    const errorEmail = validateEmail(email);
    const errorPass  = validatePassword(password);
    const errors: errRecord[] = [];
    if (errorEmail) {errors.push(errorEmail);}
    if (errorPass)  {errors.push(errorPass);}
    return errors;
}