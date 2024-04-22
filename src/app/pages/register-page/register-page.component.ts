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
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { toast } from 'ngx-sonner';
import { HlmToasterComponent } from "../../../../components/ui/ui-sonner-helm/src/lib/hlm-toaster.component";
import { Router, RouterModule } from '@angular/router';


@Component({
    selector: 'app-register-page',
    standalone: true,
    templateUrl: './register-page.component.html',
    styleUrl: './register-page.component.scss',
    imports: [
        HlmCardContentDirective,
        HlmCardDescriptionDirective,
        HlmCardDirective,
        HlmCardFooterDirective,
        HlmCardHeaderDirective,
        HlmCardTitleDirective,
        UserInterfaceModule,
        HlmToasterComponent,
        RouterModule
    ],
})
export class RegisterPageComponent implements OnInit {

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
  usernameFormControl = new FormControl<string>('');
  register() {
    if (this.emailFormControl.value !== null && this.passwordFormControl.value !== null) {
      this.authService.registerUser(this.emailFormControl.value, this.passwordFormControl.value).then((response) => {
        console.log(response);
        response.user?.updateProfile({
          displayName: this.usernameFormControl.value
        });
        toast("Sikeres regisztráció!", {
        });
      }).catch(err => {
        toast("Hiba!", {
          description: err
        });
      });
    }
  }
}
