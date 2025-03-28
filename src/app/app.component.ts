import { Component } from '@angular/core';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { HttpClient } from '@angular/common/http';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, NgStyleComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [HttpClient],
})
export class AppComponent {
  title = 'angular19Tutorial';
}
