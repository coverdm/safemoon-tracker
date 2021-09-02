import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'reflections',
    loadChildren: () => import('./features/reflections/reflections.module').then(m => m.ReflectionsModule)
  },
  {
    path: 'burning',
    loadChildren: () => import('./features/burning/burning.module').then(m => m.BurningModule)
  },
  {
    path: 'whales',
    loadChildren: () => import('./features/whales/whales.module').then(m => m.WhalesModule)
  },
  {
    path: 'donations',
    loadChildren: () => import('./features/donations/donations.module').then(m => m.DonationsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
