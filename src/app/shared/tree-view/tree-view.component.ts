import { Component, Input, HostListener, Output, EventEmitter } from '@angular/core';

import { TreeModel } from './tree-model';

@Component({
  selector: 'ttb-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss']
})
export class TreeViewComponent {
  @Input() data: TreeModel = null;
  @Input() selectedMeta = null;
  @Output() trigger = new EventEmitter();
  @HostListener('click', ['$event']) onclick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.trigger.next(this.data.meta);
    return false;
  }
  clicked(data) {
    this.trigger.next(data);
  }
}
