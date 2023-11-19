import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SupportAssistantPageRoutingModule } from './support-assistant-routing.module';

import { SupportAssistantPage } from './support-assistant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SupportAssistantPageRoutingModule
  ],
  declarations: [SupportAssistantPage]
})
export class SupportAssistantPageModule {}
