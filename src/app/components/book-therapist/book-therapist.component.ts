import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-therapist',
  imports: [CommonModule], // 
  templateUrl: './book-therapist.component.html',
  styleUrls: ['./book-therapist.component.css']
})
export class BookTherapistComponent {
  currentStep = 0;
  selectedOptions: any[] = new Array(8).fill(null); // tracks selection per slide
  
  steps = ['', '', '', '', '', '', '', ''];

  constructor(private router: Router) {}

  nextStep() {
    if (this.currentStep < 7) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 0) this.currentStep--;
  }

  selectOption(stepIndex: number, option: string) {
    this.selectedOptions[stepIndex] = option;
  }
    
  isOptionSelected(): boolean {
    return this.selectedOptions[this.currentStep] !== null;
  }

 createAccount() {
    alert('Account created!');
    this.router.navigate(['/register']);
  }

  goBack() {
    if (this.currentStep > 0) this.currentStep--;
  }

  selectAndAdvance(option: any) {
    this.selectedOptions[this.currentStep] = option;
    setTimeout(() => {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    }, 200); 
  }

  isSelected(stepIndex: number, option: any): boolean {
    return this.selectedOptions[stepIndex] === option;
  }

}
