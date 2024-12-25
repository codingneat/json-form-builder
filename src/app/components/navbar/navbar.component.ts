import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@jsverse/transloco';
import { distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';

import { LogoComponent } from '@/components/logo/logo.component';
import { Theme } from '@/core/theme-manager.service';

const MAXSCROLL = {
  lg: 351,
  md: 291,
  sm: 104,
};

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TranslocoModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    LogoComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('logoTrigger', [
      transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('250ms', style({ transform: 'scale(1)' })),
      ]),
      transition(':leave', [animate('100ms', style({ transform: 'scale(0)' }))]),
    ]),
    trigger('titleTrigger', [
      state('left', style({ transform: 'translateX(0)' })),
      state('right', style({ transform: 'translateX(20px)' })),
      transition('left => right', [animate('250ms')]),
      transition('right => left', [animate('250ms')]),
    ]),
  ],
})
export class NavbarComponent {
  @Output() toggleTheme = new EventEmitter<string>();

  theme = input.required<Theme>();

  showLogo$ = fromEvent(document, 'scroll').pipe(
    startWith(null),
    map(() => {
      const x = window.scrollY;

      const windowSize = window.innerWidth < 768 ? 'sm' : window.innerWidth > 992 ? 'lg' : 'md';

      return x > MAXSCROLL[windowSize];
    }),
    distinctUntilChanged()
  );

  onToggleTheme() {
    this.toggleTheme.emit();
  }
}
