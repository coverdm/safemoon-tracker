import {Directive, Input} from "@angular/core";
import {ButtonTheme} from "./buttonTheme";

@Directive({
  selector: '[appButton]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class]': "'app-btn' + ' app-btn-' + color",
    '[type]': 'type',
    '[class.app-loading]': 'loading'
  }
})
export class ButtonDirective {
  @Input() color: ButtonTheme = 'primary'
  @Input() type: string = 'button';
  @Input() loading: boolean;
}
