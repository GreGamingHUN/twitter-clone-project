import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../../ui/button/button.component';
import { UserInterfaceModule } from '../../user-interface/user-interface-module';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [UserInterfaceModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
