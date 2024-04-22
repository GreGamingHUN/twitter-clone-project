import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'spartan-input',
  template: `
    <input *ngIf="formControl; else noControl" class="w-80" hlmInput placeholder={{placeHolder}} type='email' [formControl]="formControl"/>
    <ng-template #noControl>
      <input class="w-80" hlmInput placeholder={{placeHolder}} type='email'/>
    </ng-template>
  `,
})
export class InputComponent {
  @Input() placeHolder!: string;
  @Input() formControl?: FormControl;
}
