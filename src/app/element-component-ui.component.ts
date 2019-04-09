import { Component, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: '[element-component-ui]',
  templateUrl: './element-component-ui.component.html',
  styles: []
})
export class ElementComponentUiComponent  {
  
  @HostListener('dragstart', ['$event'])
  dragStartElement($event: any): void {
    console.log('element-component-ui:dragStart', $event);
  }

  @HostListener('document:mousemove', ['$event'])
  mouvemoveElement($event: any): void {
    // console.log($event);
  }

  dragElement($event: any): void {
    console.log($event.toElement.offsetParent.offsetParent.getBoundingClientRect());
    console.log($event.pageX, $event.pageY);
    console.log($event.toElement.offsetParent.offsetParent);
  }

  selectElement($event: any): void {
    console.log($event);
    console.log($event.pageX, $event.pageY);
  }

  constructor() {
    console.log('element-component-ui');
  }

}