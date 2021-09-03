import { Component } from '@angular/core';
import { InputDropdownOptionComponent } from '../input-dropdown-option/input-dropdown-option.component';

@Component({
  selector: 'app-input-dropdown',
  templateUrl: 'input-dropdown.component.html',
  styleUrls: ['input-dropdown.component.scss']
})
export class InputDropdownComponent {
  active: InputDropdownOptionComponent;
}
