import auth from '@react-native-firebase/auth';
const OTP = require('../Model/Otp');

export class OtpController {
  constructor() {
    this.otp = new OTP.Otp();
  }

//   setPhoneNumber(number) {
//     this.otp.phoneNumber = `+92 ${number}`;
//   }

  // otpUnsubscribe(){
  //     if(this.unsubscribe){
  //         this.unsubscribe();
  //     }
  // }

  //confir code in OTP controller
  confirmCode(codeInput, confirmResult) {
    if (confirmResult && codeInput.length) {
      confirmResult
        .confirm(codeInput)
        .then(user => {
          this.otp.message = 'Code Confirmed!';
        })
        .catch(
          error => (this.otp.message = `Code Confirm Error: ${error.message}`),
        );
    }

    return this.otp.message;
  }

  onAuthStateChanged() {
    this.unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        this.otp.user = user.toJSON();
      }
    });
  }


  //otp as an object passed
  sendCode(otp){
    otp.message= 'Sending code ...';
    auth()
      .signInWithPhoneNumber(otp.phoneNumber)
      .then(confirmResult =>{
        otp.confirmResult= confirmResult;
        otp.message= 'Code has been sent!';
        })
      .catch(error =>{
        otp.message= `Sign In With Phone Number Error: ${error.message}`;
        });
  };
}

