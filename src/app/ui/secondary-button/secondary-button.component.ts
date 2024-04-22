import { Component, Input } from '@angular/core';

@Component({
  selector: 'spartan-secondary-button',
  template: `
    <button hlmBtn variant='outline'>{{label}}</button> `,})
export class SecondaryButtonComponent {
  @Input() label!: string;
}
