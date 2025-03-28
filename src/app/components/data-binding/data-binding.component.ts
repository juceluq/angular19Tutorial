import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  firstName: string = 'Juan';
  rollNumber: number = 121;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceHolder: string = 'Enter full name';
  div1ClassName: string = 'bg-primary';
  selectedCity: string = '';
  contadorPokemons: number = 1;
  pokemons: Subject<any> = new Subject();

  // constructor(private http: HttpClient) {
  //   this.pokemons.subscribe((pokemon: any) => {
  //     console.log('Recibido:', pokemon);
  //   });
  // }

  constructor(private router: Router){

  }
  showWelcomeMessage() {
    alert('Welcome to Angular 19 Tutorials');
  }

  // showPokemonCharmander() {
  //   this.http
  //     .get(`https://pokeapi.co/api/v2/pokemon/${this.contadorPokemons}`)
  //     .subscribe((data: Object) => {
  //       this.contadorPokemons++;
  //       this.pokemons.next(data);
  //     });
  // }

  // showUsers() {
  //   this.http.get(`http://127.0.0.1:8000/users`).subscribe((data: Object) => {
  //     console.log(data);
  //   });
  // }
  onCityChange() {
    console.log('City changed');
  }

  navigateToAdmin() {
    this.router.navigateByUrl('/admin');
  }
}
