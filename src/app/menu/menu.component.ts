import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  currentComponent: number = 0;
  @Output() public componentChanged: any = new EventEmitter<{
    value: number;
  }>();

  sendEvent(value: number) {
    this.currentComponent = value;
    this.componentChanged.emit(value);
  }
}
