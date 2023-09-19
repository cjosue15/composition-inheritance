import { Component, HostBinding, HostListener, Input } from '@angular/core';

import { Color } from '../../interfaces/color.interface';

@Component({
  standalone: true,
  selector: 'app-toggle-switch',
  template: `
    <label class="switch">
      <input type="checkbox" [checked]="checked ? 'checked' : ''" />
      <span class="slider"></span>
    </label>
  `,
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleSwitchComponent {
  @Input() checked: boolean = false;

  @Input() color: Color = 'primary';

  @Input()
  @HostBinding('class.rounded')
  rounded: boolean = false;

  @HostBinding('class')
  protected get classList(): string {
    return `${this.color}`;
  }

  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }
}
