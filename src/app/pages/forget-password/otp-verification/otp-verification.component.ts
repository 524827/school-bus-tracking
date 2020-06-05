import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.scss'],
})
export class OtpVerificationComponent implements OnInit {
  otpCheckingForm: FormGroup;
  otp;
  userId;
  userType;
  timeLeft = 60;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.showEnterOTPMessage();

    // Get the route parameter.
    this.route.params.subscribe(data => {
      this.userType = data.userType;
      this.userId = data.userId;
      this.otp = data.otp;
    });

    this.otpTimer();
  }
  enterOTPMessage;

  showEnterOTPMessage() {
    this.enterOTPMessage = 'Enter OTP recieved on your email.';
  }

  isOTPCorrect(otpData: FormGroup) {
    if (otpData.value.userOTP === this.otp) {
      this.navigateToResetPassword();
    } else {
      alert('Incorrect OTP. Please try again.');
    }
  }

  otpTimer() {
    setInterval(() => {
      if (this.timeLeft === 0) {
        this.navigateToForgetPassword();
      } else {
        document.getElementById('otpTimer').innerHTML = this.timeLeft + ' s';
        this.timeLeft--;
      }
    }, 1000);
  }

  navigateToForgetPassword() {
    this.router.navigate(['forget-password']);
  }

  navigateToResetPassword() {
    this.router.navigate(['reset-password', this.userType, this.userId]);
  }

  navigate() {
    this.navCtrl.back();
  }

  ngOnInit() {
    // Reactive form's validation.
    this.otpCheckingForm = this.formBuilder.group({
      userOTP: ['', Validators.required],
    });
  }
}
