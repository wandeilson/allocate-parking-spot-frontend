const validateEmail = (email) =>{
   return email?.toString().includes('@') && email?.toString().includes('.')
}

const validatePass = (pass) => {
    return pass?.toString().length > 6
  }
  
export {
    validateEmail,
    validatePass
}