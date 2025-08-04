import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-navbar',
  imports: [],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css'
})
export class MainNavbarComponent {
  private router = inject(Router);
    login() {
        this.router.navigate(['/login']);
    }

    signUp() {
        this.router.navigate(['/register']);
    }

    redirect() {
        this.router.navigate(['/']);
    }

}
