import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { TranslocoModule } from '@jsverse/transloco';

import { FormInputComponent } from '../form-input/form-input.component';

@Component({
  selector: 'app-json-form',
  standalone: true,
  imports: [TranslocoModule, FormsModule, CodemirrorModule, FormInputComponent],
  templateUrl: './json-form-builder.component.html',
  styleUrl: './json-form-builder.component.scss',
})
export class JsonFormBuilderComponent {
  formInput: object = {
    glossary: {
      title: 'example glossary',
      GlossDiv: {
        title: 'S',
        GlossList: {
          GlossEntry: {
            ID: 'SGML',
            SortAs: 'SGML',
            GlossTerm: 'Standard Generalized Markup Language',
            Acronym: 'SGML',
            Abbrev: 'ISO 8879:1986',
            GlossDef: {
              para: 'A meta-markup language, used to create markup languages such as DocBook.',
              GlossSeeAlso: ['GML', 'XML'],
            },
            GlossSee: 'markup',
          },
        },
      },
    },
  };

  onChangeFormInput(value: object) {
    this.formInput = value;
    console.log(this.formInput);
  }
}
