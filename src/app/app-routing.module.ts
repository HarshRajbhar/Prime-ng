import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeTableComponent } from './prime-table/prime-table.component';
import { PrimeGridComponent } from './prime-grid/prime-grid.component';
import { OtherCompoComponent } from './other-compo/other-compo.component';

const routes: Routes = [
  {
    path: 'table',
    component: PrimeTableComponent,
  },
  {
    path: 'grid',
    component: PrimeGridComponent,
  },
  {
    path: 'others',
    component: OtherCompoComponent,
  },
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
