import { TuiRoot } from "@taiga-ui/core";
import { Component } from '@angular/core';
// import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { CardEditorComponent } from './components/card-editor/card-editor.component';

@Component({
  selector: 'app-root',
  imports: [CardEditorComponent, TuiRoot],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'olicendi-front-v0';
}
