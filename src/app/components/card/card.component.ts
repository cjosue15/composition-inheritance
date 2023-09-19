import { Component, HostBinding, Input } from '@angular/core';

import { Color } from '../../interfaces/color.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  styleUrls: ['./card.component.scss'],
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
})
export class CardComponent {
  @Input() color: Color = 'primary';

  @Input()
  @HostBinding('class.rounded')
  rounded: boolean = false;

  @HostBinding('class')
  protected get classList(): string {
    return `${this.color}`;
  }
}
