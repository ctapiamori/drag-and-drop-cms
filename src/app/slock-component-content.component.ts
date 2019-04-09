import { Component, Input, HostListener } from '@angular/core';

@Component({
  selector: '[slock-component-content]',
  templateUrl: './slock-component-content.component.html',
  styles: []
})
export class SlockComponentContentComponent  {
  
  @HostListener('dragover', ['$event'])
  dragOverElement($event: DragEvent): void {
    // console.log('slock-component-content:dragOver', $event);
  }

  @HostListener('dragleave', ['$event'])
  dragLeaveElement($event: DragEvent) {
    console.log('slock-component-content:dragLeave', $event);
  }

  @HostListener('dragenter', ['$event'])
  dragEnterElement($event: DragEvent) {
    console.log('slock-component-content:dragEnter', $event);
  }

  @HostListener('window:drop', ['$event'])
  dragDropElement($event: DragEvent) {
    console.log('slock-component-content:dragDrop', $event);
  }

  constructor() {
    console.log('slock-component-content');
  }

}