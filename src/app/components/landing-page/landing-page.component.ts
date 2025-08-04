import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MainNavbarComponent } from "../main-navbar/main-navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'landing-page',
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [MainNavbarComponent, FooterComponent]
})
export class LandingPageComponent {
    private router = inject(Router);
        
    signUp() {
        this.router.navigate(['/register']);
    }

    bookTherapist() {
        this.router.navigate(['/book-therapist']);
    }

    therapistPortalRegister() {
        this.router.navigate(['/register-therapist']);
    }

    StartAssessmentClick() {
        this.router.navigate(['/assessment']);
    }
}
