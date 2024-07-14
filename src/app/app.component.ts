import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { LeftBarComponent } from "./left-bar/left-bar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent, NavbarComponent, LeftBarComponent]
})
export class AppComponent {
  title = 'final-project';

  
}
