import { Component, inject } from '@angular/core';

import { BannerComponent } from '@/components/banner/banner.component';
import { FooterComponent } from '@/components/footer/footer.component';
import { NavbarComponent } from '@/components/navbar/navbar.component';

import { ThemeManagerService } from '../theme-manager.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  standalone: true,
  imports: [NavbarComponent, BannerComponent, FooterComponent],
})
export class LayoutComponent {
  private themeManager = inject(ThemeManagerService);

  theme = this.themeManager.theme;

  toggleTheme() {
    this.themeManager.toggleTheme();
  }
}
