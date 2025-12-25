import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'editor',
        loadComponent: () =>
            import('@components/card-editor/card-editor.component').then(
                (c) => c.CardEditorComponent
            ),
    },
    {
        path: 'welcome',
        loadComponent: () =>
            import('@components/welcome-page/welcome-page.component').then(
                (c) => c.WelcomePageComponent
            ),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
