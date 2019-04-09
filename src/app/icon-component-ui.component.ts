import { Component, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: '[icon-component-ui]',
  template: '<ng-content></ng-content>',
  styles: []
})
export class IconComponentUiComponent  {
  @HostBinding('draggable') draggable = true;

  @HostListener('dragstart', ['$event'])
  dragStartIcon($event: DragEvent): void {
    console.log('icon-component-ui:dragStart', $event);
  }

  @HostListener('dragend', ['$event'])
  dragEndIcon($event: DragEvent): void {
    console.log('icon-component-ui:dragEnd', $event);
  }

  constructor() {
    console.log('icon-component-ui');
  }
  
}
