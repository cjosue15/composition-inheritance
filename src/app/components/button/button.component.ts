import { Component, HostBinding, HostListener, Input } from '@angular/core';

import { Color } from '../../interfaces/color.interface';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  color: Color = 'primary';

  @Input()
  @HostBinding('class.rounded')
  rounded: boolean = false;

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

  @HostBinding('class')
  protected get classList(): string {
    return `${this.color}`;
  }
}
