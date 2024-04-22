
import { Component, Input } from '@angular/core';


@Component({
  selector: 'spartan-primary-button',
  template: `<button hlmBtn>{{label}}</button>`,

})

export class PrimaryButtonComponent {
  @Input() label!: string;

}
