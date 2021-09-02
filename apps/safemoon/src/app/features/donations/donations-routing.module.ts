import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DonationsComponent } from './pages/donations.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: DonationsComponent
    }
  ])],
  exports: [RouterModule]
})
export class DonationsRoutingModule {}
