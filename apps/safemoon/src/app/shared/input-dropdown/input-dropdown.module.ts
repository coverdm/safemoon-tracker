import { NgModule } from '@angular/core';
import { InputDropdownComponent } from './components/input-dropdown/input-dropdown.component';
import { InputDropdownOptionComponent } from './components/input-dropdown-option/input-dropdown-option.component';

@NgModule({
  declarations: [InputDropdownComponent, InputDropdownOptionComponent],
  exports: [InputDropdownComponent, InputDropdownOptionComponent]
})
export class InputDropdownModule {

}
