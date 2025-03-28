import { NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-statement',
  imports: [FormsModule],
  templateUrl: './control-statement.component.html',
  styleUrl: './control-statement.component.css',
})
export class ControlStatementComponent {
  div1Visible: boolean = false;
  checkBoxValue: boolean = false;
  dayName: string = '';

  cityArray: string[] = [
    'Cordoba',
    'Buenos Aires',
    'Rosario',
    'Mendoza',
    'Santiago de Chile',
    'Montevideo',
  ];

  employeeArray: any[] = [
    { empId: 1, name: 'Juan', city: 'Almería', contactNumber: '1111' },
    { empId: 2, name: 'Rosa', city: 'Córdoba', contactNumber: '2222' },
    { empId: 3, name: 'Pedro', city: 'Madrid', contactNumber: '3333' },
    { empId: 4, name: 'Jaime', city: 'Barcelona', contactNumber: '4444' },
    { empId: 5, name: 'Olmo', city: 'Badajoz', contactNumber: '5555' },
  ];

  hideShowDiv1(isShow: boolean) {
    this.div1Visible = isShow;
  }
}
