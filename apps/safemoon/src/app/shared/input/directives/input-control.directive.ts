import {Directive, ElementRef, HostListener, Input, OnDestroy, Optional, Self} from "@angular/core";
import {NgControl} from "@angular/forms";
import {FormFieldControlDirective} from "../../form-field/directives/form-field-control.directive";
import {Subject} from "rxjs";
import {ControlStateEnum} from "../../form-field/types/control-state";
import {takeUntil} from "rxjs/operators";

@Directive({
  selector: '[appInputControl]',
  host: {
    'class': 'app-input-element'
  },
  providers: [{provide: FormFieldControlDirective, useExisting: InputControlDirective}]
})
export class InputControlDirective implements FormFieldControlDirective, OnDestroy {

  @Input() required: boolean;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() disabled: boolean;

  errorState: boolean;
  focused: boolean;
  controlState: Subject<ControlStateEnum>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _elementRef: ElementRef<HTMLInputElement>,
    @Optional() @Self() public ngControl: NgControl) {
    this.controlState = new Subject<ControlStateEnum>();
    if(this.ngControl) {
      this._onPopulateFieldListener();
    }
  }

  @HostListener('focus', ['true'])
  @HostListener('blur', ['false'])
  onFocusChanged(isFocused: boolean) {
    this.focused = isFocused;
    this.controlState.next()
  }

  get shouldLabelFloat(): boolean {
    return !!this._elementRef.nativeElement.value;
  };

  private _onPopulateFieldListener() {
    this.ngControl.valueChanges
      ?.pipe(takeUntil(this.destroy$))
      .subscribe((value: string) => {
        if (value) {
          this.controlState.next(ControlStateEnum.Filled)
          this._elementRef.nativeElement.value = value;
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
