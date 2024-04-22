import { Component, OnInit, inject } from '@angular/core';

import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';

import { UserInterfaceModule } from '../../user-interface/user-interface-module';
import { AuthService } from '../../services/auth.service';
import { FormControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-login-page',
    standalone: true,
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [
        HlmCardContentDirective,
        HlmCardDescriptionDirective,
        HlmCardDirective,
        HlmCardFooterDirective,
        HlmCardHeaderDirective,
        HlmCardTitleDirective,
        UserInterfaceModule,
        RouterModule
    ],

})
export class LoginPageComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(result=> {
      if (result) {
        this.router.navigate(['/']);
      }
    })
  }

  emailFormControl = new FormControl<string>('');
  passwordFormControl = new FormControl<string>('');

  login() {
    if (this.emailFormControl.value !== null && this.passwordFormControl.value !== null) {
      this.authService.signIn(this.emailFormControl.value, this.passwordFormControl.value).then((response) => {
        console.log(response);
      }).catch(err => {
        console.log(err);
      });
    }
  }
}
