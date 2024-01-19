import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',
    loadComponent: () =>
      import('./prime-table/prime-table.component').then(
        (a) => a.PrimeTableComponent
      ),
  },
  {
    path: '',
    redirectTo: 'others',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
