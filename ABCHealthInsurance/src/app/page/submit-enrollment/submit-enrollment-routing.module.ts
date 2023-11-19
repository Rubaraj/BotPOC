import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitEnrollmentPage } from './submit-enrollment.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitEnrollmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitEnrollmentPageRoutingModule {}
