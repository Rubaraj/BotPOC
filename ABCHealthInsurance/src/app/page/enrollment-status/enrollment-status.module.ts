import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnrollmentStatusPageRoutingModule } from './enrollment-status-routing.module';

import { EnrollmentStatusPage } from './enrollment-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnrollmentStatusPageRoutingModule
  ],
  declarations: [EnrollmentStatusPage]
})
export class EnrollmentStatusPageModule {}
