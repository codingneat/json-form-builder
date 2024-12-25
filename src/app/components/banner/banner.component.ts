import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { TranslocoModule } from '@jsverse/transloco';

import { LogoComponent } from '@/components/logo/logo.component';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [TranslocoModule, MatButtonModule, MatGridListModule, LogoComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {}
