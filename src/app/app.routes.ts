import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layouts/main/main.component').then(
                (c) => c.MainComponent
            ),
    },
    {
        path: 'login',
        loadComponent: () =>
            import('./layouts/auth/auth.component').then(
                (c) => c.AuthComponent
            ),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
