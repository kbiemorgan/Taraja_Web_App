import { Component, signal} from '@angular/core';
import { MainNavbarComponent } from "../main-navbar/main-navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-register',
  imports: [MainNavbarComponent, FooterComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  isLoading = signal(false);

} 
