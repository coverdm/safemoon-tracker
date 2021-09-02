import {NgModule} from '@angular/core';
import {FormFieldComponent} from './components/form-field/form-field.component';
import {FormFieldPrefixDirective} from "./directives/form-field-prefix.directive";
import {FormFieldSuffixDirective} from "./directives/form-field-suffix.directive";
import {HintComponent} from "./components/hint/hint.component";
import {CommonModule} from "@angular/common";
import {FormFieldControlDirective} from "./directives/form-field-control.directive";
import {LabelComponent} from "./components/label/label.component";

const COMPONENTS = [
  FormFieldComponent, FormFieldPrefixDirective, FormFieldSuffixDirective, HintComponent, FormFieldControlDirective,
  LabelComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class FormFieldModule {
}
