import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Configuración del locale de la app
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localePtBr from '@angular/common/locales/pt';

registerLocaleData(localeEs, 'es-ES');
registerLocaleData(localePtBr, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-ES'
    },
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Aura,
            options: {
              darkModeSelector: true
          }
        }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
