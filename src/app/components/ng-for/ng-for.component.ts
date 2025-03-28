import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css',
})
export class NgForComponent {
  cityList: string[] = ['Almería', 'Córdoba', 'Madrid', 'Barcelona', 'Badajoz'];
  employeeArray: any[] = [
    {empId: 1, name: "Juan", city: "Almería", contactNumber: "1111"},
    {empId: 2, name: "Rosa", city: "Córdoba", contactNumber: "2222"},
    {empId: 3, name: "Pedro", city: "Madrid", contactNumber: "3333"},
    {empId: 4, name: "Jaime", city: "Barcelona", contactNumber: "4444"},
    {empId: 5, name: "Olmo", city: "Badajoz", contactNumber: "5555"},
  ];
}
