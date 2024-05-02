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
    path: 'input-Form',
    loadComponent: () =>
      import('./form-page/form-page.component').then(
        (a) => a.FormPageComponent
      ),
  },
  {
    path: 'ag-grid',
    loadComponent: () =>
      import('./ag-grid/ag-grid.component').then((a) => a.AgGridComponent),
  },
  {
    path: 'nds/members-form',
    loadComponent: () =>
      import('./NDS/members-form/members-form.component').then(
        (a) => a.MembersFormComponent
      ),
  },
  {
    path: 'nds/members-form2',
    loadComponent: () =>
      import('./NDS/members-form-2/members-form-2.component').then(
        (a) => a.MembersForm2Component
      ),
  },
  {
    path: '',
    redirectTo: 'nds/members-form',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
