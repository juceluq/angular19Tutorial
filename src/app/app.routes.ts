import { Routes } from '@angular/router';
import { ControlStatementComponent } from './components/control-statement/control-statement.component';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dataBinding',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'dataBinding',
        component: DataBindingComponent
    },
    {
        path: 'ngClass',
        component: NgClassComponent
    },
    {
        path: 'controlFlow',
        component: ControlStatementComponent
    }
];
