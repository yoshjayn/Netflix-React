const Validate = (email, password, name) => {
    const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const passValid = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
  
    if (name && !name.trim()) {
      return "Name is required";
    }
  
    if (!emailValid) return "Email id is not valid";
    if (!passValid) return "Password is not valid";
    if (emailValid && passValid) return null;
  };
  
  export default Validate;
  

// const Validate = (email,password)=>{
//     const isValidMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
//     const isValidPass = /^[A-Za-z]\w{7,14}$/.test(password);
    
//     console.log("passValid=", isValidPass);
//     if (!isValidMail) return "Email entered is not valid!"
//     if (!isValidPass) return "Password entered is not valid!"
//     if (isValidMail && isValidPass) return null

// }

// export default Validate;

// const emailValid=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
//     const passValid=/^[A-Za-z]\w{7,14}$/.test(password)
//     console.log("passvalid=",passValid)
//     if(!emailValid) return "email is not valid"
//     if (!passValid) return "password is not valid"

//     if(emailValid && passValid) return null