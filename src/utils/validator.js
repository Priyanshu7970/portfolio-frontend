import { isValidEmail, isValidUsername } from "6pp"

export const namevalidator = (name)=>{
    if(!isValidUsername(name)){
    return {isValid:"true",errorMessage:"The name is not valid"}
    }
}
export const emailvalidator = (email)=>{
    if(!isValidEmail(email)){
    return {isValid:"true",errorMessage:"The email is not valid"}
    }
}