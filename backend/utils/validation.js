const validator = require('validator')

function profileValidation(data = {}){
    const errors = []
    const { userName, email, password, phone, address, userType } = data

    if(!userName) errors.push('userName is required')
    if(!email) errors.push('email is required')
    if(email && !validator.isEmail(email)) errors.push('email is not valid')
    if(!password) errors.push('password is required')
    if(password && !validator.isStrongPassword(password)) errors.push('password is not strong enough')
    if(!phone) errors.push('phone is required')
    if(!address) errors.push('address is required')
    if(!userType) errors.push('userType is required')

    return {
        valid: errors.length === 0,
        errors
    }
}

module.exports = {
    profileValidation
}