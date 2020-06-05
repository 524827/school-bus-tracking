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
    email: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter valid email.' },
    ],
    passwod: [{ type: 'required', message: 'Password is required.' }],
    confirmPassword: [
      { type: 'required', message: 'required.' },
      { type: 'equalTo', message: 'password not match.' },
    ],
    username: [{ type: 'required', message: 'username is required.' }],
    schoolName: [{ type: 'required', message: 'Schoolname is required.' }],
    branchName: [{ type: 'required', message: 'branch is required.' }],
    officeNumber: [{ type: 'required', message: 'number is required.' }],
    studentName: [{ type: 'required', message: 'Student name is required.' }],
    studentStop: [{ type: 'required', message: 'Student stop name is required.' }],
    vehicleNumber: [{ type: 'required', message: 'vehicle Number is required.' }],
    companyName: [{ type: 'required', message: 'Company name is required.' }],
    insurenceValidity: [{ type: 'required', message: 'vehicle Number is required.' }],
    modalType: [{ type: 'required', message: 'Please specify the modal type' }],
    fuelType: [{ type: 'required', message: 'Please specify the fuel type' }],
    seatingCapacity: [{ type: 'required', message: 'Please specify the seating copacity' }],
    chassisNumber: [{ type: 'required', message: 'Chassis number is required' }],
    driverName: [{ type: 'required', message: 'Chassis number is required' }],
    licenseNumber: [{ type: 'required', message: 'License number is required' }],
    adharNumber: [
      { type: 'required', message: 'Please enter valid adhar number' },
      { type: 'maxlength', message: 'adhar number cannot be more than 12 digit long.' },
      { type: 'pattern', message: 'Please enter numeric only.' },
    ],
    panNumber: [{ type: 'required', message: 'PAN number is required' }],
    routeID: [{ type: 'required', message: 'route id is required' }],
    location: [{ type: 'required', message: 'Please enter location' }],
  };
}
