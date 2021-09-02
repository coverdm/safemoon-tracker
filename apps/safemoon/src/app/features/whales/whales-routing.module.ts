import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WhalesComponent } from './pages/whales.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: WhalesComponent
    }
  ])],
  exports: [RouterModule]
})
export class WhalesRoutingModule {}
