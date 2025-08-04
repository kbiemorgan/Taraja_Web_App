import { Component, signal, computed } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-register-therapist',
  // If this is a standalone component, keep the next two lines:
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './register-therapist.component.html',
  styleUrls: ['./register-therapist.component.css'] 
})
export class RegisterTherapistComponent {
  chips = signal([
    {
      label: 'Increased income',
      top: '22%',
      left: '7%',
      open: false,
      iconSrc: 'illustrations/cash.png',
    },
    {
      label: 'Accessibility',
      top: '39%',
      left: '60%',
      open: false,
      iconSrc: 'illustrations/accessibility.png',
    },
    {
      label: 'Expanded reach',
      top: '67%',
      left: '5%',
      open: false,
      iconSrc: 'illustrations/expanded.png',
    },
    {
      label: 'Convenience',
      top: '77%',
      left: '60%',
      open: false,
      iconSrc: 'illustrations/CursorClick.png',
    }
  ]);

  onBegin() {
    console.log('Begin clicked');
  }

 started = signal(false);            

  begin()       { this.started.set(true); }

  currentStep = 0;
  selectedOptions: any[] = new Array(8).fill(null); // tracks selection per slide
  
  steps = ['', '', '', '', '', '', '', ''];

  nextStep() {
      if (this.currentStep < 7) this.currentStep++;
    }

    prevStep() {
      if (this.currentStep > 0) this.currentStep--;
    }

    isSelected(stepIndex: number, option: any): boolean {
    return this.selectedOptions[stepIndex] === option;
  }
}
