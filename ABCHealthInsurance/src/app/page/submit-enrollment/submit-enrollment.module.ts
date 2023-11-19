import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitEnrollmentPageRoutingModule } from './submit-enrollment-routing.module';

import { SubmitEnrollmentPage } from './submit-enrollment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitEnrollmentPageRoutingModule
  ],
  declarations: [SubmitEnrollmentPage]
})
export class SubmitEnrollmentPageModule {}
