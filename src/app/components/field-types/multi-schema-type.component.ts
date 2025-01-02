import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldType, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-multi-schema-type',
  standalone: true,
  imports: [FormlyModule, CommonModule],

  template: `
    <div class="card mb-3">
      <div class="card-body">
        <legend *ngIf="props.label">{{ props.label }}</legend>
        <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
      </div>
    </div>
  `,
})
export class MultiSchemaTypeComponent extends FieldType {}
