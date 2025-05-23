import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideNgxMask } from 'ngx-mask';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideNgxMask()]
};

=======
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
>>>>>>> 2335d62fa7c27cacc9c32dde894582e2fca0df87
