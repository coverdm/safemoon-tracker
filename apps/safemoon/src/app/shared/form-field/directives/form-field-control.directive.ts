import {Directive} from "@angular/core";
import {NgControl} from "@angular/forms";
import {Subject} from "rxjs";
import {ControlStateEnum} from "../types/control-state";

@Directive({
  selector: '[appFormFieldControl]'
})
export class FormFieldControlDirective {
  readonly id: string;
  readonly placeholder: string;
  readonly ngControl: NgControl;
  readonly focused: boolean;
  readonly controlState: Subject<ControlStateEnum>;
  readonly required: boolean;
  readonly disabled: boolean;
  readonly shouldLabelFloat: boolean;
  readonly errorState: boolean;
  readonly autofilled?: boolean;
}
