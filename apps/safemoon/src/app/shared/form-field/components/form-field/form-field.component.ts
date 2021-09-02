import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  NgZone,
  OnDestroy,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormFieldPrefixDirective } from '../../directives/form-field-prefix.directive';
import { FormFieldSuffixDirective } from '../../directives/form-field-suffix.directive';
import { HintComponent } from '../hint/hint.component';
import { FormFieldControlDirective } from '../../directives/form-field-control.directive';
import { LabelComponent } from '../label/label.component';
import { ErrorComponent } from '../../../error/components/error/error.component';

@Component({
  selector: 'app-form-field',
  templateUrl: 'form-field.component.html',
  styleUrls: [
    'form-field.component.scss',
    'input.scss'
  ],
  host: {
    '[class.app-outline-form-field]': 'true',
    '[class.app-should-label-float]': 'shouldLabelFloat()',
    '[class.app-focused]': 'control.focused',
    '[class.app-autofilled]': 'control.autofilled',
    '[class.app-error]': 'control.errorState || error',
    '[class.app-disabled]': 'control.disabled'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormFieldComponent implements OnDestroy, AfterContentInit, AfterContentChecked {

  @ContentChild(FormFieldSuffixDirective) suffix: FormFieldSuffixDirective;
  @ContentChild(FormFieldPrefixDirective) prefix: FormFieldPrefixDirective;
  @ContentChild(HintComponent) hint: HintComponent;
  @ContentChild(FormFieldControlDirective) control: FormFieldControlDirective;
  @ContentChild(ErrorComponent) error: ErrorComponent;
  @ContentChild(LabelComponent) label: ElementRef<HTMLElement>;

  private readonly _FLOATING_LABEL_SCALE: number = 0.85;
  private readonly LABEL_PADDING: number = 8;

  private _calculateGapImmediately: boolean = true;
  private _destroyed$: Subject<boolean> = new Subject<boolean>();
  shouldAlwaysFloat: boolean;

  constructor(private renderer: Renderer2,
              public _elementRef: ElementRef,
              private ngZone: NgZone,
              private _cdr: ChangeDetectorRef) {
  }

  private _calculateOutlineGap() {
    const label: Element = this._elementRef.nativeElement.querySelector('label');
    const outlineGap: Element = this._elementRef.nativeElement.querySelector('.form-field-outline-gap');

    let labelWidth: number = 0;

    for (let i = 0; i < label.children.length; i++) {
      labelWidth += (label.children[i] as HTMLElement).offsetWidth;
    }

    const gapWidth = labelWidth * this._FLOATING_LABEL_SCALE + this.LABEL_PADDING;
    this.renderer.setStyle(outlineGap, 'width', `${(gapWidth)}px`);
  }

  ngAfterContentChecked(): void {
    this._calculateOutlineGap();

    if (this.control?.focused || this.control?.autofilled) {
      this._calculateOutlineGap();
    }
  }

  ngAfterContentInit() {
    this.ngZone.runOutsideAngular(() => {
      this.ngZone.onStable.pipe(takeUntil(this._destroyed$))
        .subscribe(() => {
          if (this._calculateGapImmediately) {
            this._calculateOutlineGap();
          }
        });
    });
    merge(this.control.controlState)
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => {
        this._cdr.detectChanges();
      });
  }

  shouldLabelFloat() {
    return this.control.shouldLabelFloat || this.shouldAlwaysFloat;
  }

  ngOnDestroy() {
    this._destroyed$.next(true);
    this._destroyed$.complete();
  }
}
