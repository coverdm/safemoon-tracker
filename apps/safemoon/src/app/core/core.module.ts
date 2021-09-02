import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { DividerModule } from '../shared/divider/divider.module';
import { RouterModule } from '@angular/router';
import { SafemoonRefComponent } from './components/safemoon-ref/safemoon-ref.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SafemoonRefComponent,
    NotificationsComponent
  ],
  imports: [
    CommonModule,
    DividerModule,
    RouterModule
  ],
  exports: [
    SidebarComponent, HeaderComponent
  ]
})
export class CoreModule {
}
