import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
<<<<<<< HEAD
<<<<<<< HEAD
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideNgxMask()]
};

=======
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
>>>>>>> 2335d62fa7c27cacc9c32dde894582e2fca0df87
=======
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
>>>>>>> 711e1ffe6df4e52324f2c4d982e1ad30276c2ca5
