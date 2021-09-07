import { NgModule } from '@angular/core';
import { WhalesRoutingModule } from './whales-routing.module';
import { WhalesComponent } from './pages/whales.component';
import { WhalesApiService } from './services/whales-api.service';
import { HttpClientModule } from '@angular/common/http';
import { WhalesStateService } from './services/whales-state.service';
import { WhalesFacadeService } from './services/whales-facade.service';
import { CommonModule } from '@angular/common';
import { AlertModule } from '../../shared/alert/alert.module';
import { TabsModule } from '../../shared/tabs/tabs.module';
import { BigNumberModule } from '../../shared/big-number/big-number.module';

@NgModule({
  imports: [WhalesRoutingModule, HttpClientModule, CommonModule, AlertModule, TabsModule, BigNumberModule],
  declarations: [WhalesComponent],
  providers: [WhalesApiService, WhalesStateService, WhalesFacadeService],
})
export class WhalesModule {}
