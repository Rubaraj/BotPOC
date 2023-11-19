import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnrollmentStatusPage } from './enrollment-status.page';

const routes: Routes = [
  {
    path: '',
    component: EnrollmentStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollmentStatusPageRoutingModule {}
