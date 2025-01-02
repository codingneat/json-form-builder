import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideTransloco } from '@jsverse/transloco';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { TranslocoHttpLoader } from '@/transloco-loader';

import { ArrayTypeComponent } from './components/field-types/array-type.component';
import { MultiSchemaTypeComponent } from './components/field-types/multi-schema-type.component';
import { ObjectTypeComponent } from './components/field-types/object-type.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'en',
        fallbackLang: 'en',
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    importProvidersFrom([
      FormlyModule.forRoot({
        validationMessages: [{ name: 'required', message: 'This field is required' }],
        types: [
          { name: 'object', component: ObjectTypeComponent },
          { name: 'array', component: ArrayTypeComponent },
          { name: 'multischema', component: MultiSchemaTypeComponent },
        ],
      }),
      FormlyMaterialModule,
    ]),
  ],
};
