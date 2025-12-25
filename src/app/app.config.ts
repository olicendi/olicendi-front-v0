import { provideAnimations } from "@angular/platform-browser/animations";
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { provideEventPlugins } from "@taiga-ui/event-plugins";

import { routes } from './app.routes';
import { baseUrlInterceptorFn } from './core/functions/base-url.interceptor';

export const appConfig: ApplicationConfig = {
      providers: [
            provideAnimations(),
            provideZoneChangeDetection({ eventCoalescing: true }),
            provideRouter(routes),
            provideHttpClient(withInterceptors([baseUrlInterceptorFn])),
            provideEventPlugins()
      ]
};
