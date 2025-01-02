import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { FormlyFieldProps } from '@ngx-formly/material/form-field';

@Component({
  selector: 'app-object-type',
  standalone: true,
  imports: [FormlyModule, CommonModule],

  template: `
    <div class="mb-3">
      <legend *ngIf="props.label">{{ props.label }}</legend>
      <formly-field *ngFor="let f of field.fieldGroup" [field]="getField(f)"></formly-field>
    </div>
  `,
})
export class ObjectTypeComponent extends FieldType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getField(item: FormlyFieldConfig<FormlyFieldProps & Record<string, any>>) {
    if (item.props) {
      item.props.label = item.key?.toString();
    }

    return item;
  }
}
