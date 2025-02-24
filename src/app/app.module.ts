import {
  CanDashboardDeactivate,
  dashboardDeactiveGuard,
} from './guards/dashboard-deactive.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropBindingComponent } from './components/prop-binding/prop-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { CounterComponent } from './components/counter/counter.component';
import { Assignment03Component } from './components/assignment-03/assignment-03.component';
import { ComponentCommunicationParentComponent } from './components/component-communication-parent/component-communication-parent.component';
import { FirstChildComponent } from './components/component-communication-parent/first-child/first-child.component';
import { SecondChildComponent } from './components/component-communication-parent/second-child/second-child.component';
import { TemplateViewChildDiffComponent } from './components/template-view-child-diff/template-view-child-diff.component';
import { TemplateReffComponent } from './components/template-view-child-diff/template-reff/template-reff.component';
import { ViewChildComponent } from './components/template-view-child-diff/view-child/view-child.component';
import { NgTagsComponent } from './components/ng-tags/ng-tags.component';
import { ChildComponent } from './components/ng-tags/child/child.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { DirectiveTestingComponent } from './components/directive-testing/directive-testing.component';
import { RendererHighlightDirective } from './directives/renderer-highlight.directive';
import { HostListenerHighlightDirective } from './directives/host-listener-highlight.directive';
import { HostListenerAndBindingDirective } from './directives/host-listener-and-binding.directive';
import { StructuralDirective } from './directives/structural.directive';
import { ServiceTestingComponent } from './components/service-testing/service-testing.component';
import { InputterComponent } from './components/service-testing/inputter/inputter.component';
import { ShowDataComponent } from './components/service-testing/show-data/show-data.component';
import { LoggerService } from './services/logger.service';
import { TodoParentComponent } from './components/todo-parent/todo-parent.component';
import { TodoInputComponent } from './components/todo-parent/todo-input/todo-input.component';
import { DisplayTodoComponent } from './components/todo-parent/display-todo/display-todo.component';
import { HomeComponent } from './components/home/home.component';
import { RoutesComponent } from './components/routes/routes.component';
import { DashboardComponent } from './components/routes/dashboard/dashboard.component';
import { OtherComponent } from './components/routes/other/other.component';
import { authGuard } from './guards/auth.guard';
import { ObservableTestingComponent } from './components/observable-testing/observable-testing.component';

// These are the routes for this component / module
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'prop-binding', component: PropBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'login-form', component: LoginFormComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'assignment03', component: Assignment03Component },
  {
    path: 'component-communication-parent',
    component: ComponentCommunicationParentComponent,
  },
  {
    path: 'template-view-child-diff',
    component: TemplateViewChildDiffComponent,
  },
  { path: 'ng-tags', component: NgTagsComponent },
  { path: 'directive-testing', component: DirectiveTestingComponent },
  { path: 'service-testing', component: ServiceTestingComponent },
  { path: 'todo', component: TodoParentComponent },
  {
    path: 'route',
    component: RoutesComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canDeactivate: [dashboardDeactiveGuard],
      },
      { path: 'other', component: OtherComponent },
    ],
  },
  { path: 'observable-testing', component: ObservableTestingComponent },
];

// The NgModule decoration is used for every module created. Here app is considered as a module in the project
// In the declarations we need to declare all the Components we are creating [Note :- If we generate components from the CLI then they are added automatically]
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    LoginFormComponent,
    CounterComponent,
    Assignment03Component,
    ComponentCommunicationParentComponent,
    FirstChildComponent,
    SecondChildComponent,
    TemplateViewChildDiffComponent,
    TemplateReffComponent,
    ViewChildComponent,
    NgTagsComponent,
    ChildComponent,
    BasicHighlightDirective,
    DirectiveTestingComponent,
    RendererHighlightDirective,
    HostListenerHighlightDirective,
    HostListenerAndBindingDirective,
    StructuralDirective,
    ServiceTestingComponent,
    InputterComponent,
    ShowDataComponent,
    TodoParentComponent,
    TodoInputComponent,
    DisplayTodoComponent,
    HomeComponent,
    RoutesComponent,
    DashboardComponent,
    OtherComponent,
    ObservableTestingComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
