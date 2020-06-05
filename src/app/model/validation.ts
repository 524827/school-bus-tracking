
// This class contains validation for edit profile component
export class ValidationMsg {
  validation_msg = {
    fullName: [
      { type: 'required', message: 'Username is required.' },
      { type: 'maxlength', message: 'Username cannot be more than 20 characters long.' },
      { type: 'pattern', message: 'Please enter character only.' },
      { type: 'validUsername', message: 'Your username has already been taken.' },
    ],
    address: [{ type: 'required', message: 'Address is required.' }],

    mobileNumber: [
      { type: 'required', message: 'mobile number is required.' },
      { type: 'maxlength', message: 'mobile number cannot be more than 10 digit long.' },
      { type: 'pattern', message: 'Please enter numeric only.' },
    ],
    altNumber: [
      { type: 'required', message: 'Mobile number is required.' },
      { type: 'maxlength', message: 'mobile number cannot be more than 10 digit long.' },
      { type: 'pattern', message: 'Please enter numeric only.' },
    ],
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter valid email.' },
    ],
    passwod: [{ type: 'required', message: 'Password is required.' }],
    confirmPassword: [
      { type: 'required', message: 'required.' },
      { type: 'equalTo', message: 'password not match.' },
    ],
  };
}
