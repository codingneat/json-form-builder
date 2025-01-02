import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@Component({
  selector: 'app-form-output',
  standalone: true,
  imports: [FormsModule, CodemirrorModule],
  templateUrl: './form-output.component.html',
})
export class FormOutputComponent {
  @Input() formOutput = '';
}
