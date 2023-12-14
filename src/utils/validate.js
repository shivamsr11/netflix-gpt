export const checkValidData = (email,password,fullName) =>{
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
  const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
   const isFullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullName)
     
   if(!isEmailValid) return "Email is not valid";
   if(!isPasswordValid) return "Password is not valid";
   if(!isFullNameValid) return "Full Name is not valid";

   return null;
} 