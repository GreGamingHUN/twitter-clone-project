import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ui-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = false;
  userName: string | null = '';
  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(result => {
      if (result) {
        this.isLoggedIn = true;
        this.userName = result.displayName;
      } else {
        this.userName = '';
        this.isLoggedIn = false;
      }
      console.log(result);
      console.log(this.isLoggedIn);
    });
  }

  signOut() {
    this.authService.signOut().then(result => {
      console.log(result)
    });
  }

  constructor(public authService: AuthService) {

  }
}
