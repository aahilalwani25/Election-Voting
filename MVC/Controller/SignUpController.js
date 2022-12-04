class SignUpController {
  calculateAge(dob) {
    var mydob = new Date(dob);
    //calculate month difference from current date in time  
    var month_diff = Date.now() - mydob.getTime();  
      
    //convert the calculated difference in date format  
    var age_dt = new Date(month_diff);   
      
    //extract year from date      
    var year = age_dt.getUTCFullYear();  
      
    //now calculate the age of the user  
    let age = Math.abs(year - 1970);  
      
    //display the calculated age  
    return parseInt(age);
  }
}

//format:mm/dd/yyyy
console.log(new SignUpController().calculateAge('02/25/2001'));

module.exports={SignUpController};