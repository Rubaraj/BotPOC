import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupportAssistantPage } from './support-assistant.page';

const routes: Routes = [
  {
    path: '',
    component: SupportAssistantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportAssistantPageRoutingModule {}
