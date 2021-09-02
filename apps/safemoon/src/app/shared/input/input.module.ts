import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormFieldModule} from "../form-field/form-field.module";
import {InputControlDirective} from "./directives/input-control.directive";

@NgModule({
  declarations: [InputControlDirective],
  exports: [InputControlDirective],
  imports: [FormsModule, CommonModule, FormFieldModule]
})
export class InputModule {}
