import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private router = inject(Router);

  isLoading = signal(false);
  showPassword = signal(false);
  errorMessage = signal('');
  email = signal('');
  password = signal('');
  emailError = signal('');
  passwordError = signal('');

  togglePasswordVisibility() {
    this.showPassword.update(value => !value);
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }

  validateEmail() {
    const emailValue = this.email();
    if (!emailValue) {
      this.emailError.set('Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      this.emailError.set('Please enter a valid email address');
      return false;
    }
    
    this.emailError.set('');
    return true;
  }

  validatePassword() {
    const passwordValue = this.password();
    if (!passwordValue) {
      this.passwordError.set('Password is required');
      return false;
    }
    
    if (passwordValue.length < 6) {
      this.passwordError.set('Password must be at least 6 characters long');
      return false;
    }
    
    this.passwordError.set('');
    return true;
  }

  onEmailChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.email.set(target.value);
    if (this.emailError()) {
      this.validateEmail();
    }
  }

  onPasswordChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.password.set(target.value);
    if (this.passwordError()) {
      this.validatePassword();
    }
  }

  onSubmit() {
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();

    if (isEmailValid && isPasswordValid) {
      this.isLoading.set(true);
      this.errorMessage.set('');

      const loginData = {
        email: this.email(),
        password: this.password()
      };

      setTimeout(() => {
        this.isLoading.set(false);
        if (loginData.email === 'demo@taraja.com' && loginData.password === 'password') {
          console.log('Login successful:', loginData);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage.set('Invalid email or password. Use demo@taraja.com / password');
        }
      }, 1500);
    }
  }
}