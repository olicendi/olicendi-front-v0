import { Component } from '@angular/core';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'olicendi-front-v0';
}
