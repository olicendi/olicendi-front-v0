import { Component } from '@angular/core';
import { provideRoutes, RouterModule } from '@angular/router';
import { routes } from './main.routes';

@Component({
  selector: 'ol-main',
  imports: [RouterModule],
  providers: [provideRoutes(routes)],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {

}
