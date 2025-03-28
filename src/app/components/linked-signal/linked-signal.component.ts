import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css',
})
export class LinkedSignalComponent {
  firstName = signal('Juan');
  lastName = signal('Uceda');

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newValue, prevValue) => {
      const fullName = newValue + ' ' + this.lastName();
      return fullName;
    },
  });

  user = signal({
    id:1,
    name: 'Juan'
  })

  email = linkedSignal({
    source: this.user,
    computation: (user:any) => `${user.name+user.id}@gmail.com`,
    equal: (a:any, b:any) => a.id !== b.id,
  });
  changeName() {
    this.firstName.set('Pedro');
  }
  changeId() {
    this.user.set({id:2, name: 'Juan'});
  }
}
