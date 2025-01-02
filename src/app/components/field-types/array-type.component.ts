import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FieldArrayType, FormlyModule } from '@ngx-formly/core';

@Component({
  selector: 'app-array-type',
  standalone: true,
  imports: [FormlyModule, CommonModule, MatButtonModule, MatIconModule],

  template: `
    <div class="array-type-field">
      <legend *ngIf="props.label">{{ props.label }}</legend>
      <div class="array-type-field__button">
        <button mat-mini-fab type="button" (click)="add()">
          <mat-icon>add</mat-icon>
        </button>
      </div>

      <div *ngFor="let field of field.fieldGroup; let i = index" class="array-type-field__row">
        <formly-field class="col" [field]="field"></formly-field>
        <button mat-mini-fab type="button" (click)="remove(i)"><mat-icon>remove</mat-icon></button>
      </div>
    </div>
  `,
  styleUrl: './array-type.component.scss',
})
export class ArrayTypeComponent extends FieldArrayType {}
