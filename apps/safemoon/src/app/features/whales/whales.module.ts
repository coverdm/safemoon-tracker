import { NgModule } from '@angular/core';
import { WhalesRoutingModule } from './whales-routing.module';
import { WhalesComponent } from './pages/whales.component';

@NgModule({
  imports: [WhalesRoutingModule],
  declarations: [WhalesComponent]
})
export class WhalesModule {}
