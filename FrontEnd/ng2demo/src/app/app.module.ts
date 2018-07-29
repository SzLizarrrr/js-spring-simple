import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthService } from './demos/shared/services/auth.service';
import { AppGuard } from './app.guard';

import { AppComponent } from './app.component';
import { LifeCycleComponent } from './demos/life-cycle/life-cycle.component';
import { ComponentCommunicationComponent } from './demos/component-communication/component-communication.component';
import { ViewEncapsulationComponent } from './demos/view-encapsulation/view-encapsulation.component';
import { ChangeDetectionComponent } from './demos/change-detection/change-detection.component';
import { FormComponent } from './demos/form/form.component';
import { PipeComponent } from './demos/pipe/pipe.component';
import { DirectiveComponent } from './demos/directive/directive.component';
import { ObservableComponent } from './demos/observable/observable.component';
import { NgDirectiveComponent } from './demos/directive/ng-directive/ng-directive.component';
import { CustomDirectiveComponent } from './demos/directive/custom-directive/custom-directive.component';
import { ListitemComponent } from './demos/directive/ng-directive/listitem/listitem.component';
import { MyhiddenDirective } from './demos/directive/custom-directive/myhidden.directive';
import { MyifDirective } from './demos/directive/custom-directive/myif.directive';
import { TemplateDrivenComponent } from './demos/form/template-driven/template-driven.component';
import { ReactiveComponent } from './demos/form/reactive/reactive.component';
import { ReactiveFbComponent } from './demos/form/reactive-fb/reactive-fb.component';
import { CurrencyExchangePipe } from './demos/pipe/currency-exchange.pipe';
import { MyfilterPipe } from './demos/pipe/myfilter.pipe';
import { CcParentComponent } from './demos/component-communication/cc-parent/cc-parent.component';
import { CcChildComponent } from './demos/component-communication/cc-child/cc-child.component';
import { CcAnotherChildComponent } from './demos/component-communication/cc-another-child/cc-another-child.component';
import { LcPersonComponent } from './demos/life-cycle/lc-person/lc-person.component';
import { CdPersonComponent } from './demos/change-detection/cd-person/cd-person.component';
import { PersonDetailComponent } from './demos/change-detection/cd-person/person-detail/person-detail.component';
import { FormObservableComponent } from './demos/observable/form-observable/form-observable.component';
import { HttpObservableComponent } from './demos/observable/http-observable/http-observable.component';
import { VeNoneComponent } from './demos/view-encapsulation/ve-none/ve-none.component';
import { VeNativeComponent } from './demos/view-encapsulation/ve-native/ve-native.component';
import { VeEmulatedComponent } from './demos/view-encapsulation/ve-emulated/ve-emulated.component';
import { LoginComponent } from './demos/auth/login/login.component';
import { LogoutComponent } from './demos/auth/logout/logout.component';
import { RegisterComponent } from './demos/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    ComponentCommunicationComponent,
    ViewEncapsulationComponent,
    ChangeDetectionComponent,
    FormComponent,
    PipeComponent,
    DirectiveComponent,
    ObservableComponent,
    NgDirectiveComponent,
    CustomDirectiveComponent,
    ListitemComponent,
    MyhiddenDirective,
    MyifDirective,
    TemplateDrivenComponent,
    ReactiveComponent,
    ReactiveFbComponent,
    CurrencyExchangePipe,
    MyfilterPipe,
    CcParentComponent,
    CcChildComponent,
    CcAnotherChildComponent,
    LcPersonComponent,
    CdPersonComponent,
    PersonDetailComponent,
    FormObservableComponent,
    HttpObservableComponent,
    VeNoneComponent,
    VeNativeComponent,
    VeEmulatedComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
