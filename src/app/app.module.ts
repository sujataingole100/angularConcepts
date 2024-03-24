import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignalsComponent } from './signals/signals.component';
import { SingalsTwoComponent } from './singals-two/singals-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SignalsComponent,
    SingalsTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
