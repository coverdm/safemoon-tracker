import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BurningComponent } from './pages/burning.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: BurningComponent
    }
  ])],
  exports: [RouterModule]
})
export class BurningRoutingModule {}
