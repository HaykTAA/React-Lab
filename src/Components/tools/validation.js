export const usernameValidation = {
    required: {
        value: true,
        message : 'Username is required'
    },
}

export const emailValidation = {
    pattern: {
        value:/^[\w.-]+@[\w.-]+(\.\w+)+$/,
        message: "* This input must be filled"
    }
}
export const passwordValidation = {
    pattern: {
        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/,
        message: "* Incorrect password"
    }
}