import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-form-builder',
  imports: [ReactiveFormsModule, FormlyModule, CommonModule, MatButtonModule],
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnChanges {
  @Input() field: FormlyFieldConfig | null = null;
  @Output() submitForm = new EventEmitter<object>();
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model = {};

  ngOnChanges(): void {
    this.model = {};
    if (this.options.build) {
      this.options.build();
    }
  }

  onSubmit() {
    this.submitForm.emit(this.model);
  }
}
