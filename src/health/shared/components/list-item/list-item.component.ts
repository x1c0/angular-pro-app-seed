import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'list-item',
  styleUrls: ['list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list-item.component.html'
})
export class ListItemComponent {

  @Input() item: any;
  @Output() remove = new EventEmitter<any>();

  toggled: boolean = false;

  constructor() {}

  getRoute(item: any) {
    return [`../meals`, item.$key];
  }

  toggle() {
    this.toggled = !this.toggled;
  }

  removeItem() {
    this.remove.emit(this.item);
  }

}
