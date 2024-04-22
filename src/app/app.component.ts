import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'twitter-clone-project';

  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe((user) => {
      this.loggedInUser = user;

    }, error => {
      console.error(error);
    })
  }
}
