import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../ui/button/button.component';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { RouterModule } from '@angular/router';
import { SecondaryButtonComponent } from '../ui/secondary-button/secondary-button.component';
import { InputComponent } from '../ui/input/input.component';
import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { NavbarComponent } from '../ui/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    InputComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HlmButtonDirective,
    HlmInputDirective,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    InputComponent,
    NavbarComponent
  ]
})
export class UserInterfaceModule { }
