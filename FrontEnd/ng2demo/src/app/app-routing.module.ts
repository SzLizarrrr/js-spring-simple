import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { ComponentCommunicationComponent } from './demos/component-communication/component-communication.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';
import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';
import { FormComponent } from './demos/form/form.component';
import { PipeComponent } from './demos/pipe/pipe.component';
import { DirectiveComponent } from './demos/directive/directive.component';
import { ObservableComponent } from './demos/observable/observable.component';
import { LoginComponent } from './demos/auth/login/login.component';
import { LogoutComponent } from './demos/auth/logout/logout.component';
import { RegisterComponent } from './demos/auth/register/register.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AppGuard],
    children: [
      {
        path: 'lc',
        component: LifeCycleComponent
      },
      {
        path: 'cd',
        component: ChangeDetectionComponent
      },
      {
        path: 've',
        component: ViewEncapsulationComponent
      },
      {
        path: 'f',
        component: FormComponent
      },
      {
        path: 'd',
        component: DirectiveComponent
      },
      {
        path: 'p',
        component: PipeComponent
      },
      {
        path: 'cc',
        component: ComponentCommunicationComponent
      },
      {
        path: 'o',
        component: ObservableComponent
      },
      {
        path: '',
        redirectTo: 'lc',
        pathMatch: 'full'
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
