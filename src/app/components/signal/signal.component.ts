import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  firstName = signal('Juan');

  lastName = signal<string>('Uceda');

  courseName: string = 'Angular';

  rollNumber = signal<number>(0);
  constructor() {
    setTimeout(() => {
      this.courseName = 'React JS';
      this.firstName.set('Pedro');
    }, 2000);
  }
  onIncrementRollNumber() {
    this.rollNumber.update((oldValue) => oldValue + 1);
  }
}
