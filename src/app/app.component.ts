import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, HomeComponent, HeaderComponent],
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header/>
    <main>
      <!-- <app-home/> -->
      <router-outlet/>
    </main>
    <h1>Welcome to {{title}}!</h1>
    <p> Hello </p>


    <!-- <router-outlet /> -->
  `,
  styles: [
    `
      main {
        padding: 16px;
      }
      
      p {
        background-color: red;
      }
    `
  ],
})
export class AppComponent {
  title = 'first-ng-app';
} 
