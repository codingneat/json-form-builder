import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { TranslocoModule } from '@jsverse/transloco';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

import { parseJsonToFormSchema } from '@/core/utils/json.utils';

import { FormBuilderComponent } from '../form-builder/form-builder.component';
import { FormInputComponent } from '../form-input/form-input.component';
import { FormOutputComponent } from '../form-output/form-output.component';
import defaultSchema from './default-form-schema.json';
import { defaultJson } from './json-form-builder.component.constants';

@Component({
  selector: 'app-json-form',
  standalone: true,
  imports: [
    TranslocoModule,
    FormsModule,
    CodemirrorModule,
    CommonModule,
    FormInputComponent,
    FormBuilderComponent,
    FormOutputComponent,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './json-form-builder.component.html',
  styleUrl: './json-form-builder.component.scss',
})
export class JsonFormBuilderComponent implements AfterViewInit, OnInit {
  formInput: object = defaultJson;
  formOutput = '';
  formSchema: FormlyFieldConfig | null = null;
  showFormInput = true;

  constructor(private formlyJsonschema: FormlyJsonschema) {}

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const formlySchema = this.formlyJsonschema.toFieldConfig(defaultSchema as any);

    if (formlySchema?.props?.label) {
      formlySchema.props.label = '';
    }

    this.formSchema = formlySchema;
  }

  ngAfterViewInit() {
    parseJsonToFormSchema({});
  }

  async onChangeFormInput(value: object) {
    try {
      this.formInput = value;

      const formSchema = await parseJsonToFormSchema(this.formInput);

      if (!formSchema) {
        return;
      }

      const formlySchema = this.formlyJsonschema.toFieldConfig(formSchema);

      if (formlySchema?.props?.label) {
        formlySchema.props.label = '';
      }

      this.formSchema = formlySchema;
    } catch (e) {
      console.error(e);
    }
  }

  onSubmitForm(value: object) {
    this.formOutput = JSON.stringify(value, undefined, 2);

    this.showFormInput = false;
  }

  resetShowFormInput() {
    this.showFormInput = true;
  }
}
