import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-dropdown-option',
  templateUrl: 'input-dropdown-option.component.html',
  styleUrls: ['input-dropdown-option.component.scss']
})
export class InputDropdownOptionComponent {

  @Input() id: string;
  @Output() clicked: EventEmitter<InputDropdownOptionComponent> = new EventEmitter<InputDropdownOptionComponent>();

  onClick() {
    this.clicked.emit(this);
  }

}
