import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { isJsonString } from '@/core/utils/json.utils';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [FormsModule, CodemirrorModule],
  templateUrl: './form-input.component.html',
})
export class FormInputComponent implements OnInit {
  @Input() formInput: object = {};
  @Output() changeFormInput = new EventEmitter<object>();

  inputValid = true;
  prettyInput = '';

  ngOnInit() {
    this.prettyInput = JSON.stringify(this.formInput, undefined, 2);
  }

  change(el: string) {
    this.inputValid = isJsonString(el);

    if (!this.inputValid) {
      return;
    }

    this.changeFormInput.emit(JSON.parse(el));
  }
}
