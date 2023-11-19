import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'header',
    loadChildren: () => import('./layout/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'enrollment-status',
    loadChildren: () => import('./page/enrollment-status/enrollment-status.module').then( m => m.EnrollmentStatusPageModule)
  },
  {
    path: 'plan-details',
    loadChildren: () => import('./page/plan-details/plan-details.module').then( m => m.PlanDetailsPageModule)
  },
  {
    path: 'submit-enrollment',
    loadChildren: () => import('./page/submit-enrollment/submit-enrollment.module').then( m => m.SubmitEnrollmentPageModule)
  },
  {
    path: 'support-assistant',
    loadChildren: () => import('./page/support-assistant/support-assistant.module').then( m => m.SupportAssistantPageModule)
  },
  {
    path: 'enrollment-status',
    loadChildren: () => import('./page/enrollment-status/enrollment-status.module').then( m => m.EnrollmentStatusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
