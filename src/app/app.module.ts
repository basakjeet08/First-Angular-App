import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropBindingComponent } from './components/prop-binding/prop-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { FormsModule } from '@angular/forms';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

// The NgModule decoration is used for every module created. Here app is considered as a module in the project
// In the declarations we need to declare all the Components we are creating [Note :- If we generate components from the CLI then they are added automatically]
@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
