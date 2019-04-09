import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { ComponentsDrag, LayoutsDrags } from './mock/drag.mock';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit {
  componentsDrag = ComponentsDrag;
  layouts = LayoutsDrags;

  fillDefaultClass = 'border border-warning shadow p-3 ml-4 mb-4 bg-white rounded fill';
  emptyDefaultClass = 'bg-white p-3 mx-3 mb-3 shadow rounded empty';

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    let fill: any;
    let fills: any;
    let parentClone: any;

    const empties: any = document.querySelectorAll('.empty');
    const emptyDefaultClass = this.emptyDefaultClass;
    const fillDefaultClass = this.fillDefaultClass;

    init();

    // Loop through empty boxes and add listeners
    for (const empty of empties) {
      empty.addEventListener('dragover', dragOver);
      empty.addEventListener('dragenter', dragEnter);
      empty.addEventListener('dragleave', dragLeave);
      empty.addEventListener('drop', dragDrop);
    }

    function init() {
      // Fill listeners
      /* fills = document.querySelectorAll('.fill');
      parentClone = document.getElementById('parent').cloneNode(true);

      for (const fill of fills) {
        fill.addEventListener('dragstart', dragStart);
        fill.addEventListener('dragend', dragEnd);
      } */
    }

    function dragStart() {
      console.log('dragStart');
      this.className += ' hold';
      console.log(this);
      fill = this;
      // setTimeout(() => (this.className = 'invisible'), 0);
    }

    function dragEnd() {
      // console.log('dragEnd');
      this.className = fillDefaultClass;
    }

    function dragOver(e) {
      //console.log('dragOver');
      //console.log(e);
      e.preventDefault();
    }

    function dragEnter(e) {
      console.log('dragEnter');
      // console.log(e)
      e.preventDefault();
      this.className += ' hovered';
    }

    function dragLeave() {
      console.log('dragLeave');
      this.className = emptyDefaultClass;
    }

    function dragDrop() {
      this.className = emptyDefaultClass;
      this.append(fill);
      (document.getElementById('parent') as any).replaceWith(parentClone);
      init();
      console.log('dragDrop');
    }

  }

}
