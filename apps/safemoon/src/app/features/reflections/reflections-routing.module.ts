import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReflectionsComponent } from './pages/reflections.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ReflectionsComponent
    }
  ])],
  exports: [RouterModule]
})
export class ReflectionsRoutingModule {}
