import { NgModule } from '@angular/core';
import { WidgetsBarComponent } from './widgets-bar/widgets-bar.component';
import { WidgetComponent } from './widget/widget.component';

@NgModule({
  declarations: [WidgetsBarComponent, WidgetComponent],
  exports: [WidgetsBarComponent, WidgetComponent]
})
export class WidgetsBarModule {}
