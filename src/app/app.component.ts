import { Component } from '@angular/core';

import { JsonFormBuilderComponent } from '@/components/json-form-builder/json-form-builder.component';
import { LayoutComponent } from '@/core/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, JsonFormBuilderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'json-form-builder';
}
