import { ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input() id: string;
  @Input() disabled = false;
  @Input() isActive: boolean;
  @Output() clicked: EventEmitter<TabComponent> = new EventEmitter<TabComponent>();

  constructor(private _cdr: ChangeDetectorRef) {
  }

  onClick() {
    this.clicked.emit(this);
    this._cdr.detectChanges();
  }

}
