import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { ToggleSwitchComponent } from './components/toggle/toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, CardComponent, ToggleSwitchComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'composition-inheritance';
}
